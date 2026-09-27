import DocPage from "../DocPage";

export default function CloudGettingStartedPage() {
  return (
    <DocPage
      title="Getting Started with Craftly Cloud — Craftly Documentation"
      description="Quick start guide to connect your computer to Craftly Cloud."
      crumbs={["Documentation", "Craftly Cloud", "Getting Started"]}
      pageId="getting-started"
      pageTitle="Getting Started with Craftly Cloud"
      tocItems={[
        { id: "step-1-download", label: "1. Install Craftly" },
        { id: "step-2-signin", label: "2. Sign in with Google" },
        { id: "step-3-connect", label: "3. Connect your computer" },
        { id: "configuration", label: "4. Preferences & Custom Limits" },
      ]}
    >
      <p className="docs__text">
        Joining Bangladesh’s sovereign AI compute network takes less than two minutes. All you need is a computer running Mac, Windows, or Linux.
      </p>

      <h2 className="docs__heading" id="step-1-download">
        1. Install Craftly
      </h2>
      <p className="docs__text">
        Download the lightweight Craftly Desktop client tailored for your operating system:
      </p>
      <ul className="docs__list">
        <li>
          <strong>Windows:</strong> Download the 64-bit installer (<code>.exe</code>) and run setup.
        </li>
        <li>
          <strong>macOS:</strong> Download the Apple Silicon (M1/M2/M3/M4) or Intel <code>.dmg</code> and drag Craftly to your Applications folder.
        </li>
        <li>
          <strong>Linux:</strong> Install via <code>.deb</code>, <code>.rpm</code>, or the universal AppImage package.
        </li>
      </ul>

      <h2 className="docs__heading" id="step-2-signin">
        2. Sign in with Google
      </h2>
      <p className="docs__text">
        Launch the Craftly app. A browser window will open automatically asking you to authenticate securely with your Google Account.
      </p>
      <p className="docs__text">
        This links your local node to your Craftly contributor account, allowing you to track your device uptime, contribution metrics, and rewards from any web browser or phone.
      </p>

      <h2 className="docs__heading" id="step-3-connect">
        3. Connect your computer
      </h2>
      <p className="docs__text">
        Once signed in, click the prominent <strong>Connect Your Computer</strong> toggle in the app dashboard.
      </p>
      <p className="docs__text">
        The app will run a quick, 5-second diagnostic benchmark to calibrate your CPU threads, GPU VRAM, and available memory. Once calibrated, your machine will join the active network mesh in standby mode.
      </p>

      <h2 className="docs__heading" id="configuration">
        4. Preferences &amp; Custom Limits
      </h2>
      <p className="docs__text">
        You have complete control over how and when your hardware contributes:
      </p>
      <ul className="docs__list">
        <li>
          <strong>Max RAM Allocation:</strong> Choose how many gigabytes of RAM Craftly is allowed to use (default: 50% of free memory).
        </li>
        <li>
          <strong>Auto-Pause on Battery:</strong> On laptops, contribution automatically pauses whenever your device is unplugged from AC power.
        </li>
        <li>
          <strong>User Activity Detection:</strong> Contribution pauses instantly when you launch demanding games or creative applications.
        </li>
      </ul>
    </DocPage>
  );
}
