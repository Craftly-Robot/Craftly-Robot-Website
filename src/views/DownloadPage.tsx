"use client";

import Link from "next/link";
import ImageWithFallback from "../components/common/ImageWithFallback";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import SectionTitle from "../components/ui/SectionTitle";
import { useOS } from "../hooks/useOS";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./DownloadPage.css";

const AppleIcon = () => (
  <svg viewBox="0 0 384 512" width="20" height="20" fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const WindowsIcon = () => (
  <svg viewBox="0 0 448 512" width="20" height="20" fill="currentColor">
    <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" />
  </svg>
);

const LinuxIcon = () => (
  <ImageWithFallback
    src="/assets/brand/linux-logo.png"
    alt="Linux"
    width="20"
    height="20"
    style={{ objectFit: "contain" }}
  />
);

const AndroidIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0004.5511-.4482.9997-.9993.9997zm-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997zm11.4045-6.02l1.9973-3.4592c.1158-.201.0475-.4587-.1545-.5745-.2015-.1158-.4587-.0461-.5745.1545L17.11 8.971C15.6575 8.2934 13.9103 7.874 12 7.874c-1.9103 0-3.6575.4194-5.11 1.097l-2.0398-3.5288c-.1158-.2006-.373-.2703-.5745-.1545-.202.1158-.2703.3735-.1545.5745l1.9973 3.4592C2.6953 10.334 0 13.921 0 18.2323h24c0-4.3113-2.6953-7.8983-6.1185-9.3109z" />
  </svg>
);

interface DownloadButtonProps {
  href: string;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

const DownloadButton = ({ href, disabled, variant = "primary", children }: DownloadButtonProps) => (
  <a
    href={href}
    className={`dl-btn dl-btn--${variant}`}
    aria-disabled={disabled}
    style={disabled ? { pointerEvents: "none", opacity: 0.5 } : {}}
  >
    {children}
  </a>
);

interface PlatformSectionProps {
  icon: React.ReactNode;
  title: string;
  fileSize?: string;
  children: React.ReactNode;
}

const PlatformSection = ({ icon, title, fileSize, children }: PlatformSectionProps) => (
  <div className="os-column">
    <h3 className="os-title">
      {icon} {title}
    </h3>
    {fileSize && <div className="os-file-size">{fileSize}</div>}
    {children}
  </div>
);

export default function DownloadPage() {
  const revealRef = useScrollReveal();
  const osName = useOS();

  return (
    <div className="download-page container" ref={revealRef}>
      <Breadcrumbs items={[{ label: "Download" }]} />
      <div className="download-header">
        <div className="download-hero-top">
          <SectionTitle text={`Download Craftly\nfor ${osName}`} className="download-hero__title" />
          <Link href="/resources/releases" className="btn-previous-releases">
            View previous releases
          </Link>
        </div>
      </div>

      {/* Workspace Downloads */}
      <div className="download-section" id="workspace">
        <div className="section-header">
          <h2 className="section-title">Craftly Workspace</h2>
          <span className="version-badge">v3.8.5</span>
        </div>

        <div className="download-columns">
          <PlatformSection icon={<AppleIcon />} title="macOS" fileSize="~180 MB">
            <DownloadButton href="https://dl.craftlyrobot.com/workspace_macOS">
              Download for macOS
            </DownloadButton>
            <div className="min-reqs">
              <div className="min-reqs__title">Minimum Requirements</div>
              <div className="min-reqs__text">macOS 12 (Monterey) or later</div>
            </div>
            <div className="install-instructions">
              <div className="install-instructions__title">Installation</div>
              <div className="install-instructions__text">
                Open the .dmg file and drag Craftly to Applications
              </div>
            </div>
          </PlatformSection>

          <PlatformSection icon={<WindowsIcon />} title="Windows" fileSize="~150 MB">
            <DownloadButton href="https://dl.craftlyrobot.com/workspace_windows">
              Download for Windows
            </DownloadButton>
            <div className="min-reqs">
              <div className="min-reqs__title">Minimum Requirements</div>
              <div className="min-reqs__text">Windows 10 (64 bit)</div>
            </div>
            <div className="install-instructions">
              <div className="install-instructions__title">Installation</div>
              <div className="install-instructions__text">
                Run the installer and follow the setup wizard
              </div>
            </div>
          </PlatformSection>

          <PlatformSection icon={<LinuxIcon />} title="Linux" fileSize="~160 MB">
            <DownloadButton href="https://dl.craftlyrobot.com/workspace_linux">
              Download for Linux
            </DownloadButton>
            <div className="min-reqs">
              <div className="min-reqs__title">Minimum Requirements</div>
              <div className="min-reqs__text">Ubuntu 20, Debian 10, Fedora 36, RHEL 8 or later</div>
            </div>
            <div className="install-instructions">
              <div className="install-instructions__title">Installation</div>
              <div className="install-instructions__text">
                Extract the archive and run the executable
              </div>
            </div>
          </PlatformSection>
        </div>

        <div className="download-columns download-columns--mobile mt">
          <PlatformSection icon={<AndroidIcon />} title="Android">
            <DownloadButton href="https://dl.craftlyrobot.com/workspace_android">
              Download for Android
            </DownloadButton>
            <div className="min-reqs">
              <div className="min-reqs__title">Minimum Requirements</div>
              <div className="min-reqs__text">Android 8.0 or later</div>
            </div>
          </PlatformSection>

          <PlatformSection icon={<AppleIcon />} title="iOS">
            <DownloadButton href="https://apps.apple.com/app/craftly-workspace/id1234567890">
              Download on the App Store
            </DownloadButton>
            <div className="min-reqs">
              <div className="min-reqs__title">Minimum Requirements</div>
              <div className="min-reqs__text">iOS 15.0 or later</div>
            </div>
          </PlatformSection>
        </div>
      </div>

      {/* Divider */}
      <hr className="download-divider" />

      {/* Sandbox */}
      <div className="download-section" id="sandbox">
        <div className="section-header">
          <h2 className="section-title">Sandbox</h2>
          <span className="version-badge version-badge--dev">Preview</span>
        </div>
        <p className="section-desc">
          Try the latest preview builds. These may contain experimental features and are not
          recommended for production use.
        </p>

        <div className="dl-grid">
          <PlatformSection icon={<AppleIcon />} title="macOS">
            <DownloadButton href="https://sandbox-dl.craftlyrobot.com/workspace_macOS">
              Download for macOS
            </DownloadButton>
          </PlatformSection>

          <PlatformSection icon={<WindowsIcon />} title="Windows">
            <DownloadButton href="https://sandbox-dl.craftlyrobot.com/workspace_windows">
              Download for Windows
            </DownloadButton>
          </PlatformSection>

          <PlatformSection icon={<LinuxIcon />} title="Linux">
            <DownloadButton href="https://sandbox-dl.craftlyrobot.com/workspace_linux">
              Download for Linux
            </DownloadButton>
          </PlatformSection>
        </div>
      </div>

      {/* Divider */}
      <hr className="download-divider" />

      {/* Robot — Coming Soon */}
      <div className="download-section" id="robot">
        <div className="section-header">
          <h2 className="section-title">Craftly Robot</h2>
          <span className="version-badge version-badge--dev">Coming Soon</span>
        </div>
        <p className="section-desc">
          Currently in development. Sign up to be notified when it launches.
        </p>
        <a
          href="mailto:hello@craftlyrobot.com?subject=Notify me about Craftly Robot"
          className="dl-btn dl-btn--primary"
          style={{ maxWidth: "300px" }}
        >
          Get Notified
        </a>
      </div>
    </div>
  );
}
