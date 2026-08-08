import { siteContent } from '../../data/siteContent';
import './ArchitectureVisualization.css';

export default function ArchitectureVisualization() {
  return (
    <section className="section section--lg architecture-section" id="architecture">
      <div className="container">
        <div className="architecture__grid">
          <div>
            <span className="text-label reveal">{siteContent.architecture.label}</span>
            <h2 className="text-h2 reveal reveal-delay-1" style={{ marginTop: 'var(--space-md)' }}>
              {siteContent.architecture.headline}
            </h2>
            <p className="text-body-lg reveal reveal-delay-2" style={{ marginTop: 'var(--space-lg)', maxWidth: '440px' }}>
              {siteContent.architecture.description}
            </p>
          </div>
          <div className="architecture__flow reveal reveal-delay-2">
            {siteContent.architecture.layers.map((layer, i) => (
              <div key={layer.label} className={`architecture__layer reveal reveal-delay-${Math.min(i + 1, 5)}`}>
                <div className="architecture__layer-dot" />
                <span className="architecture__layer-label">{layer.label}</span>
                <span className="architecture__layer-desc">{layer.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
