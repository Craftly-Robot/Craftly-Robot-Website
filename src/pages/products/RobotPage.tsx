import { Helmet } from 'react-helmet-async';
import { products } from '../../data/products';
import VideoShowcase from '../../components/ui/VideoShowcase';
import CTASection from '../../components/sections/CTASection';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ProductPage.css';

const product = products.find((p) => p.id === 'robot')!;

export default function RobotPage() {
  const revealRef = useScrollReveal();

  return (
    <>
      <Helmet>
        <title>{product.name} — Craftly</title>
        <meta name="description" content={product.tagline} />
      </Helmet>
      
      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100vw',
          height: '100%',
          background: 'radial-gradient(ellipse at 50% 0%, hsla(260, 60%, 60%, 0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: -1
        }} />
        <section className="product-hero">
          <div className="product-hero__icon" style={{ color: 'var(--color-text)' }}>◈</div>
          <h1 className="text-display product-hero__title">{product.name}</h1>
          <p className="product-hero__tagline">{product.tagline}</p>
          <p className="product-hero__desc">{product.description}</p>
        </section>
      </div>

      <div className="product-showcase-large">
        <VideoShowcase 
          src={product.videoSrc}
          poster={product.posterSrc}
          altText="Craftly Robot"
        />
      </div>

      <section className="product-features" ref={revealRef}>
        <div className="container">
          <div className="product-features__header reveal">
            <h2 className="text-h2">Capabilities</h2>
            <p className="text-body-lg" style={{ marginTop: 'var(--space-sm)', color: 'var(--color-text-secondary)' }}>
              Next-generation autonomous engineering and cyber capabilities.
            </p>
          </div>
          <div className="product-features__grid">
            {product.capabilities.map((cap, i) => (
              <div key={cap} className={`feature-card reveal reveal-delay-${(i % 4) + 1}`}>
                <div className="feature-card__icon" style={{ color: 'var(--color-text)' }}>◈</div>
                <h3 className="feature-card__title">{cap}</h3>
                <p className="feature-card__desc">
                  State of the art solutions for {cap.toLowerCase()}, delivering unparalleled precision and efficiency autonomously.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
