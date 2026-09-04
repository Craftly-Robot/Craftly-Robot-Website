import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import "./HeroVisual.css";

// Procedural 1D Perlin-style noise for smooth organic cursor breathing
class SimpleNoise {
  private MAX_VERTICES = 256;
  private MAX_VERTICES_MASK = 255;
  private amplitude = 1;
  private scale = 1;
  private r: number[] = [];

  constructor() {
    for (let i = 0; i < this.MAX_VERTICES; ++i) {
      this.r.push(Math.random());
    }
  }

  getVal(val: number): number {
    const t = val * this.scale;
    const n = Math.floor(t);
    const r = t - n;
    const i = r * r * (3 - 2 * r);
    const a = n % this.MAX_VERTICES_MASK;
    const o = (a + 1) % this.MAX_VERTICES_MASK;
    return this.lerp(this.r[a], this.r[o], i) * this.amplitude;
  }

  private lerp(a: number, b: number, t: number): number {
    return a * (1 - t) + b * t;
  }
}

// Bridson's Poisson Disk Sampling for uniform, natural particle distribution without clustering
function generatePoissonPoints(
  width: number,
  height: number,
  minDist: number,
  maxDist: number,
  maxTries = 18,
): [number, number][] {
  const cellSize = minDist / Math.SQRT2;
  const gridWidth = Math.ceil(width / cellSize);
  const gridHeight = Math.ceil(height / cellSize);
  const grid = new Int32Array(gridWidth * gridHeight).fill(-1);
  const points: [number, number][] = [];
  const activeList: number[] = [];

  const p0: [number, number] = [width * 0.5, height * 0.5];
  points.push(p0);
  grid[
    Math.floor(p0[0] / cellSize) + Math.floor(p0[1] / cellSize) * gridWidth
  ] = 0;
  activeList.push(0);

  const distDiff = maxDist - minDist;

  while (activeList.length > 0) {
    const randIdx = Math.floor(Math.random() * activeList.length);
    const pointIdx = activeList[randIdx];
    const point = points[pointIdx];
    let found = false;

    for (let t = 0; t < maxTries; t++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = minDist + Math.random() * distDiff;
      const cx = point[0] + Math.cos(angle) * distance;
      const cy = point[1] + Math.sin(angle) * distance;

      if (cx >= 0 && cx < width && cy >= 0 && cy < height) {
        const gx = Math.floor(cx / cellSize);
        const gy = Math.floor(cy / cellSize);
        let ok = true;

        const xMin = Math.max(0, gx - 2);
        const xMax = Math.min(gridWidth - 1, gx + 2);
        const yMin = Math.max(0, gy - 2);
        const yMax = Math.min(gridHeight - 1, gy + 2);

        for (let x = xMin; x <= xMax; x++) {
          for (let y = yMin; y <= yMax; y++) {
            const neighborIdx = grid[x + y * gridWidth];
            if (neighborIdx !== -1) {
              const np = points[neighborIdx];
              const dx = cx - np[0];
              const dy = cy - np[1];
              if (dx * dx + dy * dy < minDist * minDist) {
                ok = false;
                break;
              }
            }
          }
          if (!ok) break;
        }

        if (ok) {
          const newIdx = points.length;
          points.push([cx, cy]);
          grid[gx + gy * gridWidth] = newIdx;
          activeList.push(newIdx);
          found = true;
          break;
        }
      }
    }

    if (!found) {
      activeList[randIdx] = activeList[activeList.length - 1];
      activeList.pop();
    }
  }

  return points;
}

// Simplex 2D/3D Noise in GLSL
const NOISE_GLSL = `
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
vec4 permute(vec4 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
float permute(float x) { return floor(mod(((x*34.0)+1.0)*x, 289.0)); }

vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
float taylorInvSqrt(float r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m;
  m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float snoise(vec3 v) {
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

  i = mod(i, 289.0);
  vec4 p = permute( permute( permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  float n_ = 1.0/7.0;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
}
`;

// Offscreen GPGPU Simulation Vertex Shader
const SIM_VERTEX_SHADER = `
void main() {
    gl_Position = vec4(position, 1.0);
}
`;

// Offscreen GPGPU Simulation Fragment Shader
const SIM_FRAGMENT_SHADER = `
precision highp float;
uniform sampler2D uPosition;
uniform sampler2D uPosRefs;
uniform vec2 uRingPos;
uniform float uTime;
uniform float uDeltaTime;
uniform float uRingRadius;
uniform float uRingWidth;
uniform float uRingWidth2;
uniform float uRingDisplacement;

${NOISE_GLSL}

void main() {
    vec2 simTexCoords = gl_FragCoord.xy / 256.0;
    vec4 pFrame = texture2D(uPosition, simTexCoords);

    float scale = pFrame.z;
    float velocity = pFrame.w;
    vec2 refPos = texture2D(uPosRefs, simTexCoords).xy;

    float time = uTime * 0.5;
    vec2 curentPos = refPos;

    vec2 pos = pFrame.xy;
    pos *= 0.8;

    float dist = distance(curentPos.xy, uRingPos);
    float noise0 = snoise(vec3(curentPos.xy * 0.2 + vec2(18.4924, 72.9744), time * 0.5));
    float dist1 = distance(curentPos.xy + (noise0 * 0.005), uRingPos);

    float t = smoothstep(uRingRadius - (uRingWidth * 2.0), uRingRadius, dist) - smoothstep(uRingRadius, uRingRadius + uRingWidth, dist1);
    float t2 = smoothstep(uRingRadius - (uRingWidth2 * 2.0), uRingRadius, dist) - smoothstep(uRingRadius, uRingRadius + uRingWidth2, dist1);
    float t3 = smoothstep(uRingRadius + uRingWidth2, uRingRadius, dist);

    t = pow(t, 2.0);
    t2 = pow(t2, 3.0);

    t += t2 * 3.0;
    t += t3 * 0.4;
    t += snoise(vec3(curentPos.xy * 30.0 + vec2(11.4924, 12.9744), time * 0.5)) * t3 * 0.5;

    float nS = snoise(vec3(curentPos.xy * 2.0 + vec2(18.4924, 72.9744), time * 0.5));
    t += pow((nS + 1.5) * 0.5, 2.0) * 0.6;

    // Ambient baseline scale so particles remain visible across the hero field
    t += 0.15;

    // Multi-scale noise displacement
    float noise1 = snoise(vec3(curentPos.xy * 4.0 + vec2(88.494, 32.4397), time * 0.35));
    float noise2 = snoise(vec3(curentPos.xy * 4.0 + vec2(50.904, 120.947), time * 0.35));

    float noise3 = snoise(vec3(curentPos.xy * 20.0 + vec2(18.4924, 72.9744), time * 0.5));
    float noise4 = snoise(vec3(curentPos.xy * 20.0 + vec2(50.904, 120.947), time * 0.5));

    vec2 disp = vec2(noise1, noise2) * 0.03;
    disp += vec2(noise3, noise4) * 0.005;

    // Sinusoidal wave ripple
    disp.x += sin((refPos.x * 20.0) + (time * 4.0)) * 0.02 * clamp(dist, 0.0, 1.0);
    disp.y += cos((refPos.y * 20.0) + (time * 3.0)) * 0.02 * clamp(dist, 0.0, 1.0);

    pos -= (uRingPos - (curentPos + disp)) * pow(t2, 0.75) * uRingDisplacement;

    // Spring damping for scale
    float scaleDiff = t - scale;
    scaleDiff *= 0.2;
    scale += scaleDiff;

    // Final position
    vec2 finalPos = curentPos + disp + (pos * 0.25);

    velocity *= 0.5;
    velocity += scale * 0.25;

    gl_FragColor = vec4(finalPos, scale, velocity);
}
`;

// Particle Point Render Vertex Shader
const RENDER_VERTEX_SHADER = `
precision highp float;
attribute vec4 seeds;

uniform sampler2D uPosition;
uniform float uParticleScale;
uniform float uPixelRatio;

varying vec4 vSeeds;
varying float vVelocity;
varying vec2 vLocalPos;
varying vec2 vScreenPos;
varying float vScale;

void main() {
    vec4 pos = texture2D(uPosition, uv);
    vSeeds = seeds;

    vVelocity = pos.w;
    vScale = pos.z;
    vLocalPos = pos.xy;
    vec4 viewSpace = modelViewMatrix * vec4(vec3(pos.xy, 0.0), 1.0);

    gl_Position = projectionMatrix * viewSpace;
    vScreenPos = gl_Position.xy;

    gl_PointSize = max(1.2, ((vScale * 7.0) * (uPixelRatio * 0.5) * uParticleScale));
}
`;

// Particle Pill / Capsule Signed Distance Field Fragment Shader
const RENDER_FRAGMENT_SHADER = `
precision highp float;

varying vec4 vSeeds;
varying vec2 vScreenPos;
varying vec2 vLocalPos;
varying float vScale;
varying float vVelocity;

uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;

uniform vec2 uRingPos;
uniform vec2 uRez;
uniform float uAlpha;
uniform float uTime;

${NOISE_GLSL}

// Signed distance to rounded box (capsule / dash shape)
float sdRoundBox(in vec2 p, in vec2 b, in vec4 r) {
    r.xy = (p.x > 0.0) ? r.xy : r.zw;
    r.x  = (p.y > 0.0) ? r.x  : r.y;
    vec2 q = abs(p) - b + r.x;
    return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r.x;
}

vec2 rotate(vec2 v, float a) {
    float s = sin(a);
    float c = cos(a);
    mat2 m = mat2(c, s, -s, c);
    return m * v;
}

void main() {
    // Multi-frequency noise for orientation & color variation
    float noiseAngle = snoise(vec3(vLocalPos * 10.0 + vec2(18.4924, 72.9744), uTime * 0.85));
    float noiseColor = snoise(vec3(vLocalPos * 2.0 + vec2(74.664, 91.556), uTime * 0.5));
    noiseColor = (noiseColor + 1.0) * 0.5;

    // Angle of flow along the ring around the mouse
    float angle = atan(vLocalPos.y - uRingPos.y, vLocalPos.x - uRingPos.x);

    vec2 uv = gl_PointCoord.xy;
    uv -= vec2(0.5);
    uv.y *= -1.0;
    uv = rotate(uv, -angle + (noiseAngle * 0.5));

    float h = 0.8;
    float progress = smoothstep(0.0, 0.75, pow(noiseColor, 2.0));
    vec3 col = mix(
        mix(uColor1, uColor2, progress / h),
        mix(uColor2, uColor3, (progress - h) / (1.0 - h)),
        step(h, progress)
    );

    // Pill-shaped rounded box (Antigravity dash geometry)
    float rounded = sdRoundBox(uv, vec2(0.46, 0.19), vec4(0.19));
    rounded = smoothstep(0.06, 0.0, rounded);

    // Alpha with smooth visibility threshold
    float a = uAlpha * rounded * smoothstep(0.03, 0.16, vScale);

    if (a < 0.008) {
        discard;
    }

    vec3 color = clamp(col, 0.0, 1.0);
    // Tactile depth modulation: active particles darken subtly for crisp contrast
    color = mix(color, color * 0.75, clamp(vVelocity * 0.6, 0.0, 1.0));

    gl_FragColor = vec4(color, clamp(a, 0.0, 1.0));
}
`;

export default function HeroParticles({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();
  /* Compiling the shaders and building the buffers below blocks the main thread
     for the better part of a second. Run it only after the intro overlay is
     gone, otherwise the stall lands in the middle of the wordmark's fade and
     freezes it half-way. */
  const [introDone, setIntroDone] = useState(
    () => !document.documentElement.classList.contains("intro-active"),
  );

  useEffect(() => {
    if (introDone) return;
    const html = document.documentElement;
    const observer = new MutationObserver(() => {
      if (!html.classList.contains("intro-active")) setIntroDone(true);
    });
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, [introDone]);

  useEffect(() => {
    if (reducedMotion || !introDone) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // WebGL Renderer setup
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
      preserveDrawingBuffer: false,
      stencil: false,
    });
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(container.offsetWidth, container.offsetHeight);

    // Camera & Scene setup
    const camera = new THREE.PerspectiveCamera(
      40,
      container.offsetWidth / container.offsetHeight,
      0.1,
      1000,
    );
    // Position camera so 3D origin frames the hero title and CTA buttons directly
    camera.position.set(0, -0.36, 3.1);

    const scene = new THREE.Scene();

    // Raycast ground plane for 3D mouse tracking
    const raycastPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(16, 16),
      new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide }),
    );
    raycastPlane.position.y = camera.position.y;
    scene.add(raycastPlane);

    // Generate dense Poisson distributed points (matching Google Antigravity density)
    const size = 256;
    const length = size * size;
    const rawPoints = generatePoissonPoints(500, 500, 2.7, 3.6, 18);
    const count = rawPoints.length;

    // Initialize Reference Positions Texture
    const posData = new Float32Array(length * 4);
    for (let i = 0; i < count; i++) {
      const idx = i * 4;
      posData[idx + 0] = (rawPoints[i][0] - 250) / 250;
      posData[idx + 1] = (rawPoints[i][1] - 250) / 250;
      posData[idx + 2] = 0;
      posData[idx + 3] = 0;
    }

    const posTex = new THREE.DataTexture(
      posData,
      size,
      size,
      THREE.RGBAFormat,
      THREE.FloatType,
    );
    posTex.minFilter = THREE.NearestFilter;
    posTex.magFilter = THREE.NearestFilter;
    posTex.generateMipmaps = false;
    posTex.needsUpdate = true;

    // Double-buffered FBO Render Targets for simulation ping-pong
    const createRenderTarget = () =>
      new THREE.WebGLRenderTarget(size, size, {
        wrapS: THREE.ClampToEdgeWrapping,
        wrapT: THREE.ClampToEdgeWrapping,
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        format: THREE.RGBAFormat,
        type: THREE.FloatType,
        depthBuffer: false,
        stencilBuffer: false,
      });

    let rt1 = createRenderTarget();
    let rt2 = createRenderTarget();

    // Clear initial render targets
    renderer.setRenderTarget(rt1);
    renderer.setClearColor(0, 0);
    renderer.clear();
    renderer.setRenderTarget(rt2);
    renderer.setClearColor(0, 0);
    renderer.clear();
    renderer.setRenderTarget(null);

    // Simulation Scene & Quad
    const simScene = new THREE.Scene();
    const simCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const simMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uPosition: { value: posTex },
        uPosRefs: { value: posTex },
        uRingPos: { value: new THREE.Vector2(0, 0) },
        uRingRadius: { value: 0.175 },
        uDeltaTime: { value: 0 },
        uRingWidth: { value: 0.006 },
        uRingWidth2: { value: 0.107 },
        uRingDisplacement: { value: 0.62 },
        uTime: { value: 0 },
      },
      vertexShader: SIM_VERTEX_SHADER,
      fragmentShader: SIM_FRAGMENT_SHADER,
      depthTest: false,
      depthWrite: false,
    });
    const simQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), simMaterial);
    simQuad.frustumCulled = false;
    simScene.add(simQuad);

    // Geometry for Render Points
    const renderGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const uvs = new Float32Array(count * 2);
    const seeds = new Float32Array(count * 4);

    for (let i = 0; i < count; i++) {
      const u = ((i % size) + 0.5) / size;
      const v = (Math.floor(i / size) + 0.5) / size;
      uvs[i * 2] = u;
      uvs[i * 2 + 1] = v;

      seeds[i * 4] = Math.random();
      seeds[i * 4 + 1] = Math.random();
      seeds[i * 4 + 2] = Math.random();
      seeds[i * 4 + 3] = Math.random();
    }

    renderGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );
    renderGeometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
    renderGeometry.setAttribute("seeds", new THREE.BufferAttribute(seeds, 4));

    // Particle Scale responsive ratio (matching Google Antigravity)
    const particlesScale = 0.62;
    const calcParticleScale = () =>
      (canvas.width / pixelRatio / 2000) * particlesScale;

    // Render Material with Craftly Brand Monochrome Black Palette
    const renderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uPosition: { value: posTex },
        uTime: { value: 0 },
        // Craftly Minimalist Brand Palette (Black / Deep Charcoal)
        uColor1: { value: new THREE.Color("#08080a") }, // Deep black
        uColor2: { value: new THREE.Color("#1a1b22") }, // Obsidian graphite
        uColor3: { value: new THREE.Color("#353740") }, // Slate dark grey
        uAlpha: { value: 0.88 },
        uRingPos: { value: new THREE.Vector2(0, 0) },
        uRez: { value: new THREE.Vector2(canvas.width, canvas.height) },
        uParticleScale: { value: calcParticleScale() },
        uPixelRatio: { value: pixelRatio },
      },
      vertexShader: RENDER_VERTEX_SHADER,
      fragmentShader: RENDER_FRAGMENT_SHADER,
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });

    const particlesMesh = new THREE.Points(renderGeometry, renderMaterial);
    particlesMesh.position.set(0, 0, 0);
    particlesMesh.scale.set(5, 5, 5);
    scene.add(particlesMesh);

    // Mouse Tracking and State
    const mouse = new THREE.Vector2(0, 0);
    const raycaster = new THREE.Raycaster();
    const intersectionPoint = new THREE.Vector3(0, 0, 0);
    const cursorPos = new THREE.Vector2(0, 0);
    const ringPos = new THREE.Vector2(0, 0);
    let isIntersecting = false;
    let mouseIsOver = false;
    let everRendered = false;

    const noiseGen = new SimpleNoise();
    const clock = new THREE.Clock();
    let lastTime = 0;
    let isVisible = true;
    let animId: number | null = null;

    // Global mouse tracking relative to the hero container
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;

      if (
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom
      ) {
        mouseIsOver = true;
        mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -(((clientY - rect.top) / rect.height) * 2 - 1);
      } else {
        mouseIsOver = false;
      }
    };

    const onMouseLeave = () => {
      mouseIsOver = false;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave, { passive: true });

    // Resize handler
    const onResize = () => {
      if (!container || !canvas) return;
      const width = container.offsetWidth;
      const height = container.offsetHeight;

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderMaterial.uniforms.uRez.value.set(canvas.width, canvas.height);
      renderMaterial.uniforms.uPixelRatio.value = pixelRatio;
      renderMaterial.uniforms.uParticleScale.value = calcParticleScale();
    };

    window.addEventListener("resize", onResize, { passive: true });

    // Intersection Observer to pause rendering when hero is out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { root: null, threshold: 0 },
    );
    observer.observe(container);

    // Main Simulation & Render Loop
    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();
      const dt = elapsedTime - lastTime;
      lastTime = elapsedTime;

      // Mouse raycasting to world plane
      if (mouseIsOver) {
        raycaster.setFromCamera(mouse, camera);
        const hits = raycaster.intersectObject(raycastPlane);
        if (hits.length > 0) {
          intersectionPoint.copy(hits[0].point);
          isIntersecting = true;
        } else {
          isIntersecting = false;
        }
      } else {
        isIntersecting = false;
      }

      // Procedural wandering noise for natural breathing motion
      const tx = (noiseGen.getVal(elapsedTime * 0.66 + 94.234) - 0.5) * 2;
      const ty = (noiseGen.getVal(elapsedTime * 0.75 + 21.028) - 0.5) * 2;

      if (isIntersecting) {
        cursorPos.set(
          intersectionPoint.x * 0.175 + tx * 0.05,
          (intersectionPoint.y - camera.position.y) * 0.175 + ty * 0.05,
        );
        ringPos.set(
          ringPos.x + (cursorPos.x - ringPos.x) * 0.035,
          ringPos.y + (cursorPos.y - ringPos.y) * 0.035,
        );
      } else {
        cursorPos.set(tx * 0.2, ty * 0.1);
        ringPos.set(
          ringPos.x + (cursorPos.x - ringPos.x) * 0.012,
          ringPos.y + (cursorPos.y - ringPos.y) * 0.012,
        );
      }

      // Dynamic breathing ring radius
      const ringRadius =
        0.175 +
        Math.sin(elapsedTime * 1.0) * 0.03 +
        Math.cos(elapsedTime * 3.0) * 0.02;

      // Update simulation uniforms
      simMaterial.uniforms.uPosition.value = everRendered
        ? rt1.texture
        : posTex;
      simMaterial.uniforms.uTime.value = elapsedTime;
      simMaterial.uniforms.uDeltaTime.value = dt;
      simMaterial.uniforms.uRingRadius.value = ringRadius;
      simMaterial.uniforms.uRingPos.value.copy(ringPos);

      // Step 1: Render GPU simulation into RT2
      renderer.setRenderTarget(rt2);
      renderer.render(simScene, simCamera);
      renderer.setRenderTarget(null);

      // Step 2: Render particle points into screen canvas using RT2
      renderMaterial.uniforms.uPosition.value = everRendered
        ? rt2.texture
        : posTex;
      renderMaterial.uniforms.uTime.value = elapsedTime;
      renderMaterial.uniforms.uRingPos.value.copy(ringPos);
      renderMaterial.uniforms.uParticleScale.value = calcParticleScale();

      renderer.render(scene, camera);

      // Step 3: Ping-pong swap render targets
      const temp = rt1;
      rt1 = rt2;
      rt2 = temp;
      everRendered = true;
    };

    animId = requestAnimationFrame(animate);

    // Cleanup resources on unmount
    return () => {
      if (animId !== null) cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);

      renderGeometry.dispose();
      renderMaterial.dispose();
      simMaterial.dispose();
      simQuad.geometry.dispose();
      raycastPlane.geometry.dispose();
      (raycastPlane.material as THREE.Material).dispose();
      rt1.dispose();
      rt2.dispose();
      posTex.dispose();
      renderer.dispose();
    };
  }, [reducedMotion, introDone]);

  if (reducedMotion) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={`hero-visual ${className}`.trim()}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="hero-visual__canvas" />
    </div>
  );
}
