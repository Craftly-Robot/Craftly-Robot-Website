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

const LinuxIcon = () => (
  <svg viewBox="0 0 448 512" width="16" height="16" fill="currentColor">
    <path d="M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.7.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.5zM420 432c-1.8-3.4-5.4-4-9.3-4-19.1 0-38.3.4-57.4-.2-23.7-.8-47.5-3.4-70.9-8.4-13.6-2.9-27.5-6.8-40.8-11.3C223.3 401.7 205.8 400 188 400c-17.6 0-35.3 1.6-53.5 8-13.3 4.6-27.1 8.5-40.8 11.3-23.4 5-47.2 7.6-70.9 8.4-19.1.6-38.3.2-57.4.2-3.9 0-7.5.6-9.3 4-2.8 5.3-.2 13 3.5 17.5 12.3 15 28.1 26 46.8 32.5 24 8.3 49 11.4 74.3 11 11.6-.2 23.2-1.2 34.6-3.3 27-5.1 53.6-13.1 79.5-23.8 28.5 11.5 57.5 19.8 87.5 24.8 12.5 2.1 25.1 3.2 37.8 3.3 23 .3 45.6-3.1 67.5-11 18-6.6 33.3-17.6 44.9-32.5 3.5-4.4 6-12.1 3.2-17.5zM224 16C123.5 16 46.8 91.8 46.8 186.2c0 23.6 4.7 46.4 13.8 67 19.1 43.1 49 78.4 89.2 103.2 24 14.8 51.5 24.8 79.8 29 16.5 2.4 33.3 2.5 49.8.5 27.5-3.4 54.1-13 77.8-28.5 40.5-26.6 69.4-61.9 87.2-104.5 7.6-18.4 11.6-38.2 11.6-58.7C456 93.3 371.3 16 224 16zm-74.1 190.5c-19.6 1.4-34.7-14.8-34.7-32.3 0-18.1 14.8-33.6 35.1-33.6 19.1 0 35.1 15 35.1 33.6-.1 17.6-15.6 33.8-35.5 32.3zm142.1 0c-19.6 1.4-34.7-14.8-34.7-32.3 0-18.1 14.8-33.6 35.1-33.6 19.1 0 35.1 15 35.1 33.6 0 17.6-15.5 33.8-35.5 32.3zM161.7 87.2c-5.5 0-9.8-3.4-9.8-7.5s4.4-7.5 9.8-7.5 9.8 3.4 9.8 7.5-4.4 7.5-9.8 7.5zm121.1 0c-5.5 0-9.8-3.4-9.8-7.5s4.4-7.5 9.8-7.5 9.8 3.4 9.8 7.5-4.3 7.5-9.8 7.5z"/>
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
          <button className="dl-btn dl-btn--primary" disabled={disabled}>
            Download for Apple Silicon
          </button>
          <button className="dl-btn dl-btn--secondary" disabled={disabled}>
            Download for Intel
          </button>
          
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
          <button className="dl-btn dl-btn--primary" disabled={disabled}>
            Download for x64
          </button>
          <button className="dl-btn dl-btn--secondary" disabled={disabled}>
            Download for ARM64
          </button>
          
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
          <button className="dl-btn dl-btn--primary" disabled={disabled}>
            Download for x64
          </button>
          <button className="dl-btn dl-btn--secondary" disabled={disabled}>
            Download for ARM64
          </button>
          
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
        <div className="download-header">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <h1 className="download-hero__title">
              Download Craftly for {osName}
            </h1>
            <a href="#" className="nav-pill" style={{ display: 'inline-flex', alignSelf: 'flex-start' }}>View previous releases</a>
          </div>
          <div className="download-nav-pills">
            <a href="#workspace" className="nav-pill">Craftly Workspace</a>
            <a href="#robot" className="nav-pill">Craftly Robot</a>
          </div>
        </div>

        <ProductDownloadSection title="Craftly Workspace" version="2.6.0" id="workspace" />
        
        {/* Divider */}
        <hr style={{ border: 'none', borderTop: '1px solid var(--color-border-subtle)', margin: '48px 0' }} />

        <ProductDownloadSection title="Craftly Robot" version="2.1.1" id="robot" disabled={true} />

      </div>
    </>
  );
}
