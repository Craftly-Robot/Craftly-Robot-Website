import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useOS } from '../hooks/useOS';
import './DownloadPage.css';

const AppleIcon = () => (
  <svg viewBox="0 0 384 512" width="16" height="16" fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
  </svg>
);

const WindowsIcon = () => (
  <svg viewBox="0 0 448 512" width="16" height="16" fill="currentColor">
    <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/>
  </svg>
);

/* Simple outline diamond/flask icon matching the Antigravity reference */
const LinuxIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a4 4 0 0 0-4 4v4l-4 8h16l-4-8V6a4 4 0 0 0-4-4Z" />
    <path d="M8 18v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2" />
  </svg>
);

interface ProductSectionProps {
  title: string;
  version: string;
  id: string;
  disabled?: boolean;
}

const ProductDownloadSection = ({ title, version, id, disabled }: ProductSectionProps) => {
  return (
    <div className="download-section" id={id}>
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <span className="version-badge">v{version}</span>
      </div>

      <div className="download-columns">
        {/* macOS Column */}
        <div className="os-column">
          <h3 className="os-title">
            <AppleIcon /> macOS
          </h3>
          <a href="#" className="dl-btn dl-btn--primary" aria-disabled={disabled} style={disabled ? { pointerEvents: 'none', opacity: 0.5 } : {}}>
            Download for Apple Silicon
          </a>
          <a href="#" className="dl-btn dl-btn--secondary" aria-disabled={disabled} style={disabled ? { pointerEvents: 'none', opacity: 0.5 } : {}}>
            Download for Intel
          </a>
          
          <div className="min-reqs">
            <div className="min-reqs__title">Minimum Requirements</div>
            <div className="min-reqs__text">
              macOS versions with Apple security update support. This is typically the current and two previous versions. Min Version 12 (Monterey), X86 is not supported
            </div>
          </div>
        </div>

        {/* Windows Column */}
        <div className="os-column">
          <h3 className="os-title">
            <WindowsIcon /> Windows
          </h3>
          <a href="#" className="dl-btn dl-btn--primary" aria-disabled={disabled} style={disabled ? { pointerEvents: 'none', opacity: 0.5 } : {}}>
            Download for x64
          </a>
          <a href="#" className="dl-btn dl-btn--secondary" aria-disabled={disabled} style={disabled ? { pointerEvents: 'none', opacity: 0.5 } : {}}>
            Download for ARM64
          </a>
          
          <div className="min-reqs">
            <div className="min-reqs__title">Minimum Requirements</div>
            <div className="min-reqs__text">
              Windows 10 (64 bit)
            </div>
          </div>
        </div>

        {/* Linux Column */}
        <div className="os-column">
          <h3 className="os-title">
            <LinuxIcon /> Linux
          </h3>
          <a href="#" className="dl-btn dl-btn--primary" aria-disabled={disabled} style={disabled ? { pointerEvents: 'none', opacity: 0.5 } : {}}>
            Download for x64
          </a>
          <a href="#" className="dl-btn dl-btn--secondary" aria-disabled={disabled} style={disabled ? { pointerEvents: 'none', opacity: 0.5 } : {}}>
            Download for ARM64
          </a>

          
          <div className="min-reqs">
            <div className="min-reqs__title">Minimum Requirements</div>
            <div className="min-reqs__text">
              glibc &gt;= 2.28, glibcxx &gt;= 3.4.25 (e.g. Ubuntu 20, Debian 10, Fedora 36, RHEL 8)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TypewriterTitle({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        // Hide cursor after typing finishes
        setTimeout(() => setShowCursor(false), 1200);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <h1 className="download-hero__title">
      {displayedText}
      {showCursor && <span className="typewriter-cursor">|</span>}
    </h1>
  );
}

export default function DownloadPage() {
  const revealRef = useScrollReveal();
  const osName = useOS();
  const [activeProduct, setActiveProduct] = useState<'workspace' | 'robot'>('workspace');

  return (
    <>
      <Helmet>
        <title>Download Craftly — Intelligent Systems</title>
        <meta name="description" content="Download Craftly Workspace and Craftly Robot for Windows, macOS, and Linux." />
      </Helmet>

      <div className="download-page container" ref={revealRef}>
        <div className="download-header">
          <TypewriterTitle text={`Download Craftly for ${osName}`} />
          
          <div className="download-product-tabs">
            <button
              className={`product-tab ${activeProduct === 'workspace' ? 'product-tab--active' : ''}`}
              onClick={() => setActiveProduct('workspace')}
            >
              Craftly Workspace
            </button>
            <button
              className={`product-tab ${activeProduct === 'robot' ? 'product-tab--active' : ''}`}
              onClick={() => setActiveProduct('robot')}
            >
              Craftly Robot
            </button>
          </div>
        </div>

        {activeProduct === 'workspace' && (
          <ProductDownloadSection title="Craftly Workspace" version="2.6.0" id="workspace" />
        )}
        
        {activeProduct === 'robot' && (
          <ProductDownloadSection title="Craftly Robot" version="2.1.1" id="robot" disabled={true} />
        )}
      </div>
    </>
  );
}
