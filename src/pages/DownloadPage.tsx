import { useEffect, useState } from "react";
import { SEO } from "../components/SEO";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useOS } from "../hooks/useOS";
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

/* Simple outline diamond/flask icon matching the Antigravity reference */
const LinuxIcon = () => (
  <img
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

interface ProductSectionProps {
  title: string;
  version: string;
  id: string;
  disabled?: boolean;
  disabledPlatforms?: {
    mac?: boolean;
    windows?: boolean;
    linux?: boolean;
    android?: boolean;
    ios?: boolean;
  };
  links?: {
    macAppleSilicon?: string;
    macIntel?: string;
    winX64?: string;
    winArm64?: string;
    linuxX64?: string;
    linuxArm64?: string;
    androidApk?: string;
    androidPlayStore?: string;
    iosAppStore?: string;
  };
}

const ProductDownloadSection = ({
  title,
  version,
  id,
  disabled,
  disabledPlatforms,
  links,
}: ProductSectionProps) => {
  const macDisabled = disabled || disabledPlatforms?.mac;
  const winDisabled = disabled || disabledPlatforms?.windows;
  const linuxDisabled = disabled || disabledPlatforms?.linux;
  const androidDisabled = disabled || disabledPlatforms?.android;
  const iosDisabled = disabled || disabledPlatforms?.ios;

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
          <a
            href={links?.macAppleSilicon || "#"}
            className="dl-btn dl-btn--primary"
            aria-disabled={macDisabled}
            style={macDisabled ? { pointerEvents: "none", opacity: 0.5 } : {}}
          >
            Download for Apple Silicon
          </a>
          <a
            href={links?.macIntel || "#"}
            className="dl-btn dl-btn--secondary"
            aria-disabled={macDisabled}
            style={macDisabled ? { pointerEvents: "none", opacity: 0.5 } : {}}
          >
            Download for Intel
          </a>

          <div className="min-reqs">
            <div className="min-reqs__title">Minimum Requirements</div>
            <div className="min-reqs__text">
              macOS versions with Apple security update support. This is
              typically the current and two previous versions. Min Version 12
              (Monterey), X86 is not supported
            </div>
          </div>
        </div>

        {/* Windows Column */}
        <div className="os-column">
          <h3 className="os-title">
            <WindowsIcon /> Windows
          </h3>
          <a
            href={links?.winX64 || "#"}
            className="dl-btn dl-btn--primary"
            aria-disabled={winDisabled}
            style={winDisabled ? { pointerEvents: "none", opacity: 0.5 } : {}}
          >
            Download for x64
          </a>
          <a
            href={links?.winArm64 || "#"}
            className="dl-btn dl-btn--secondary"
            aria-disabled={winDisabled}
            style={winDisabled ? { pointerEvents: "none", opacity: 0.5 } : {}}
          >
            Download for ARM64
          </a>

          <div className="min-reqs">
            <div className="min-reqs__title">Minimum Requirements</div>
            <div className="min-reqs__text">Windows 10 (64 bit)</div>
          </div>
        </div>

        {/* Linux Column */}
        <div className="os-column">
          <h3 className="os-title">
            <LinuxIcon /> Linux
          </h3>
          <a
            href={links?.linuxX64 || "#"}
            className="dl-btn dl-btn--primary"
            aria-disabled={linuxDisabled}
            style={linuxDisabled ? { pointerEvents: "none", opacity: 0.5 } : {}}
          >
            Download for x64
          </a>
          <a
            href={links?.linuxArm64 || "#"}
            className="dl-btn dl-btn--secondary"
            aria-disabled={linuxDisabled}
            style={linuxDisabled ? { pointerEvents: "none", opacity: 0.5 } : {}}
          >
            Download for ARM64
          </a>

          <div className="min-reqs">
            <div className="min-reqs__title">Minimum Requirements</div>
            <div className="min-reqs__text">
              glibc &gt;= 2.28, glibcxx &gt;= 3.4.25 (e.g. Ubuntu 20, Debian 10,
              Fedora 36, RHEL 8)
            </div>
          </div>
        </div>
      </div>

      <div
        className="download-columns download-columns--mobile"
        style={{ marginTop: "24px" }}
      >
        {/* Android Column */}
        <div className="os-column">
          <h3 className="os-title">
            <AndroidIcon /> Android
          </h3>
          <a
            href={links?.androidApk || "#"}
            className="dl-btn dl-btn--primary"
            aria-disabled={androidDisabled}
            style={
              androidDisabled ? { pointerEvents: "none", opacity: 0.5 } : {}
            }
          >
            Download APK
          </a>
          <a
            href={links?.androidPlayStore || "#"}
            className="dl-btn dl-btn--secondary"
            aria-disabled={androidDisabled || !links?.androidPlayStore}
            style={
              androidDisabled || !links?.androidPlayStore
                ? { pointerEvents: "none", opacity: 0.5 }
                : {}
            }
          >
            Get it on Google Play
          </a>

          <div className="min-reqs">
            <div className="min-reqs__title">Minimum Requirements</div>
            <div className="min-reqs__text">Android 8.0 (Oreo) or later.</div>
          </div>
        </div>

        {/* iOS Column */}
        <div className="os-column">
          <h3 className="os-title">
            <AppleIcon /> iOS
          </h3>
          <a
            href={links?.iosAppStore || "#"}
            className="dl-btn dl-btn--primary"
            aria-disabled={iosDisabled}
            style={iosDisabled ? { pointerEvents: "none", opacity: 0.5 } : {}}
          >
            Download on the App Store
          </a>
          <a
            href="#"
            className="dl-btn dl-btn--secondary"
            aria-disabled={iosDisabled}
            style={
              iosDisabled
                ? { pointerEvents: "none", opacity: 0.5, visibility: "hidden" }
                : { visibility: "hidden" }
            }
          >
            Placeholder
          </a>

          <div className="min-reqs">
            <div className="min-reqs__title">Minimum Requirements</div>
            <div className="min-reqs__text">
              iOS 15.0 or later. Compatible with iPhone, iPad, and iPod touch.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function TypewriterTitle({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [text]);

  const lines = displayedText.split("\n");

  return (
    <h1 className="download-hero__title">
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
      <span className="typewriter-cursor"></span>
    </h1>
  );
}

export default function DownloadPage() {
  const revealRef = useScrollReveal();
  const osName = useOS();

  return (
    <>
      <SEO
        title="Download Craftly — Intelligent Systems"
        description="Download Craftly Workspace and Craftly Robot for Windows, macOS, and Linux."
      />

      <div className="download-page container" ref={revealRef}>
        <div className="download-header">
          <div className="download-hero-top">
            <TypewriterTitle text={`Download Craftly\nfor ${osName}`} />
            <Link to="/resources/releases" className="btn-previous-releases">
              View previous releases
            </Link>
          </div>

          <div className="download-product-tabs">
            <a href="#workspace" className="product-tab product-tab--active">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
              Craftly Workspace
            </a>
            <a href="#robot" className="product-tab">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 8V4H8" />
                <rect width="16" height="12" x="4" y="8" rx="2" />
                <path d="M2 14h2" />
                <path d="M20 14h2" />
                <path d="M15 13v2" />
                <path d="M9 13v2" />
              </svg>
              Craftly Robot
            </a>
          </div>
        </div>

        <ProductDownloadSection
          title="Craftly Workspace"
          version="3.8.5"
          id="workspace"
        />

        {/* Divider */}
        <hr
          style={{
            border: "none",
            borderTop: "1px solid var(--color-border-subtle)",
            margin: "48px 0",
          }}
        />

        <ProductDownloadSection
          title="Craftly Robot"
          version="1.0.150"
          id="robot"
          disabled={false}
          disabledPlatforms={{
            mac: true,
            windows: true,
            linux: true,
            ios: true,
          }}
          links={{
            androidApk: "/assets/downloads/craftly-robot.apk",
          }}
        />
      </div>
    </>
  );
}
