import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import DropdownIcon from '../../components/ui/DropdownIcon';
import TypewriterTitle from '../../components/ui/TypewriterTitle';
import './ReleasesPage.css';

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
  <img src="/assets/brand/linux-logo.png" alt="Linux" width="16" height="16" style={{ objectFit: 'contain' }} />
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);


interface ReleaseItem {
  version: string;
  macOsAppleSilicon?: string;
  macOsIntel?: string;
  windowsX64?: string;
  windowsArm64?: string;
  linuxX64?: string;
  linuxArm64?: string;
}

const robotReleases: ReleaseItem[] = [
  { version: '1.0.150', macOsAppleSilicon: '#', macOsIntel: '#', windowsX64: '#', windowsArm64: '#', linuxX64: '#', linuxArm64: '#' },
  { version: '2.7.1' },
  { version: '2.6.0' },
  { version: '2.5.0' },
  { version: '2.4.3' },
  { version: '2.3.1' },
  { version: '2.3.0' },
  { version: '2.2.1' },
  { version: '2.1.4' },
  { version: '2.0.11' },
  { version: '2.0.10' },
  { version: '2.0.6' },
  { version: '2.0.1' },
  { version: '2.0.0' }
];

const workspaceReleases: ReleaseItem[] = [
  { version: '3.8.5', macOsAppleSilicon: '#', macOsIntel: '#', windowsX64: '#', windowsArm64: '#', linuxX64: '#', linuxArm64: '#' },
  { version: '3.8.4' },
  { version: '3.8.0' },
];

export default function ReleasesPage() {
  const [activeTab, setActiveTab] = useState<'workspace' | 'robot'>('workspace');
  const [expandedVersions, setExpandedVersions] = useState<string[]>(['3.8.5']);

  const releases = activeTab === 'robot' ? robotReleases : workspaceReleases;

  const toggleVersion = (version: string) => {
    setExpandedVersions(prev => 
      prev.includes(version) 
        ? prev.filter(v => v !== version) 
        : [...prev, version]
    );
  };

  return (
    <>
      <Helmet>
        <title>Craftly Releases</title>
        <meta name="description" content="Download previous Craftly and Craftly Workspace releases." />
      </Helmet>

      <main className="releases-page">
        <div className="releases-hero-wrapper">
          <div className="releases-hero container">
            <div className="releases-hero__content">
              <TypewriterTitle text={`Craftly\nReleases`} className="releases-hero__title" />
              <p className="releases-hero__desc">
                Download previous Craftly Workspace and Craftly Robot releases. By default, they auto-update to the latest version. To stay on old versions, you will need to set Update: Mode to manual or none in the settings.
              </p>
            </div>
            
            <div className="releases-hero__action">
              <Link to="/resources/changelog" className="btn-changelog">
                View changelog
              </Link>
            </div>
          </div>

          <div className="releases-tabs container">
            <button
              className={`releases-tab ${activeTab === 'workspace' ? 'active' : ''}`}
              onClick={() => { setActiveTab('workspace'); setExpandedVersions(['3.8.5']); }}
            >
              Craftly Workspace
            </button>
            <button
              className={`releases-tab ${activeTab === 'robot' ? 'active' : ''}`}
              onClick={() => { setActiveTab('robot'); setExpandedVersions(['1.0.150']); }}
            >
              Craftly Robot
            </button>
          </div>
        </div>

        <div className="releases-list container">
          {releases.map((release) => {
            const isExpanded = expandedVersions.includes(release.version);

            return (
              <div key={release.version} className={`release-item ${isExpanded ? 'release-item--expanded' : ''}`} onClick={() => toggleVersion(release.version)}>
                <div className="release-item__version-info">
                  <span className="release-item__version-label">Version</span>
                  <span className="release-item__version-number">{release.version}</span>
                </div>

                 {isExpanded && (
                  <div className="release-item__content">
                    {/* macOS */}
                    <div className="os-downloads">
                      <h4 className="os-downloads__title">
                        <AppleIcon /> macOS
                      </h4>
                      <div className="os-downloads__links">
                        <a href={release.macOsAppleSilicon || "#"} className="os-download-link" onClick={(e) => { e.stopPropagation(); if (e.currentTarget.getAttribute('href') === '#') e.preventDefault(); }}>
                          <DownloadIcon /> macOS Apple Silicon (.dmg)
                        </a>
                        <a href={release.macOsIntel || "#"} className="os-download-link" onClick={(e) => { e.stopPropagation(); if (e.currentTarget.getAttribute('href') === '#') e.preventDefault(); }}>
                          <DownloadIcon /> macOS Intel (.dmg)
                        </a>
                      </div>
                    </div>

                    {/* Windows */}
                    <div className="os-downloads">
                      <h4 className="os-downloads__title">
                        <WindowsIcon /> Windows
                      </h4>
                      <div className="os-downloads__links">
                        <a href={release.windowsX64 || "#"} className="os-download-link" onClick={(e) => { e.stopPropagation(); if (e.currentTarget.getAttribute('href') === '#') e.preventDefault(); }}>
                          <DownloadIcon /> Windows x64 (.exe)
                        </a>
                        <a href={release.windowsArm64 || "#"} className="os-download-link" onClick={(e) => { e.stopPropagation(); if (e.currentTarget.getAttribute('href') === '#') e.preventDefault(); }}>
                          <DownloadIcon /> Windows ARM64 (.exe)
                        </a>
                      </div>
                    </div>

                    {/* Linux */}
                    <div className="os-downloads">
                      <h4 className="os-downloads__title">
                        <LinuxIcon /> Linux
                      </h4>
                      <div className="os-downloads__links">
                        <a href={release.linuxX64 || "#"} className="os-download-link" onClick={(e) => { e.stopPropagation(); if (e.currentTarget.getAttribute('href') === '#') e.preventDefault(); }}>
                          <DownloadIcon /> Linux x64 (.tar.gz)
                        </a>
                        <a href={release.linuxArm64 || "#"} className="os-download-link" onClick={(e) => { e.stopPropagation(); if (e.currentTarget.getAttribute('href') === '#') e.preventDefault(); }}>
                          <DownloadIcon /> Linux ARM64 (.tar.gz)
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                <div className="release-item__toggle">
                  <DropdownIcon isOpen={isExpanded} size={20} />
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
