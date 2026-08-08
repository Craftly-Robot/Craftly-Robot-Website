import { Helmet } from 'react-helmet-async';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { products } from '../data/products';
import { downloads } from '../data/downloads';
import { useOS } from '../hooks/useOS';
import './DownloadPage.css';

export default function DownloadPage() {
  const revealRef = useScrollReveal();
  const osName = useOS();

  return (
    <>
      <Helmet>
        <title>Download Craftly — Intelligent Systems</title>
        <meta name="description" content="Download Craftly Workspace and Craftly Robot for Windows, macOS, and Linux." />
      </Helmet>

      <div className="download-page container" ref={revealRef}>
        <div className="download-hero">
          <h1 className="text-display download-hero__title">
            Get Craftly
          </h1>
          <p className="download-hero__desc">
            Download the next generation of intelligent systems for your local environment.
          </p>
        </div>

        <div className="download-grid">
          {products.map((product, i) => {
            const downloadInfo = downloads.find(d => d.productId === product.id);
            return (
            <div key={product.id} className={`download-card reveal reveal-delay-${i + 1}`}>
              <div className="download-card__icon" style={{ color: product.id === 'robot' ? 'var(--color-text)' : 'var(--color-accent)' }}>
                {product.id === 'workspace' ? '⬡' : '◈'}
              </div>
              <h2 className="download-card__title">{product.name}</h2>
              <p className="download-card__desc">
                {product.tagline}
              </p>
              
              <button className="download-btn">
                Download for {osName}
              </button>
              <div className="download-meta">
                <span>Version {downloadInfo?.version || '0.1.0'}</span>
                <span>{downloadInfo?.releaseDate || '2026'}</span>
              </div>
            </div>
            );
          })}
        </div>

        <div className="system-reqs reveal reveal-delay-3">
          <h2 className="system-reqs__title">System Requirements</h2>
          <div className="system-reqs__grid">
            <div className="req-group">
              <h3 className="req-group__title">Minimum</h3>
              <ul className="req-list">
                <li><span>OS</span><span>Windows 10 / macOS 12+</span></li>
                <li><span>Processor</span><span>Intel Core i5 / Apple M1</span></li>
                <li><span>Memory</span><span>8 GB RAM</span></li>
                <li><span>Storage</span><span>4 GB available space</span></li>
              </ul>
            </div>
            <div className="req-group">
              <h3 className="req-group__title">Recommended (For Agentic Tasks)</h3>
              <ul className="req-list">
                <li><span>OS</span><span>Windows 11 / macOS 13+</span></li>
                <li><span>Processor</span><span>Intel Core i7 / Apple M2 or M3</span></li>
                <li><span>Memory</span><span>16+ GB RAM</span></li>
                <li><span>Storage</span><span>10 GB SSD</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
