import { useScrollReveal } from '../../hooks/useScrollReveal';
import './CapabilitiesSection.css';

const CAPABILITIES = [
  { id: '01', title: 'Agentic AI', desc: 'Autonomous reasoning engines capable of planning, deciding, and acting within complex environments.' },
  { id: '02', title: 'Multi-Agent Systems', desc: 'Coordinated clusters of specialized agents working in tandem to solve multi-dimensional problems.' },
  { id: '03', title: 'Repository Intelligence', desc: 'Deep semantic understanding of entire codebases, enabling precise global refactoring.' },
  { id: '04', title: 'Context Understanding', desc: 'Infinite-context processing allowing agents to retain and leverage vast amounts of system knowledge.' },
  { id: '05', title: 'Task Graphs', desc: 'Dynamic generation and execution of dependency-aware task graphs for reliable orchestration.' },
  { id: '06', title: 'Tool Execution', desc: 'Seamless integration with external APIs, terminals, and systems for real-world impact.' },
  { id: '07', title: 'Verification', desc: 'Built-in self-correction and output verification loops to guarantee high-fidelity results.' },
  { id: '08', title: 'Memory', desc: 'Persistent episodic and semantic memory architectures for long-term continuous learning.' },
  { id: '09', title: 'Cybersecurity', desc: 'Enterprise-grade isolation, sandboxing, and policy enforcement for safe autonomous execution.' }
];

export default function CapabilitiesSection() {
  const revealRef = useScrollReveal();

  return (
    <section className="section section--xl capabilities-section" ref={revealRef}>
      <div className="container">
        <div className="capabilities__header reveal">
          <span className="text-label">Capabilities</span>
          <h2 className="text-display capabilities__title">Intelligence across every dimension.</h2>
        </div>
        
        <div className="capabilities__list">
          {CAPABILITIES.map((cap, i) => (
            <div key={cap.id} className={`capabilities__row reveal reveal-delay-${(i % 4) + 1}`}>
              <div className="capabilities__id">{cap.id}</div>
              <div className="capabilities__content">
                <h3 className="capabilities__item-title">{cap.title}</h3>
                <p className="capabilities__item-desc">{cap.desc}</p>
              </div>
              <div className="capabilities__arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
