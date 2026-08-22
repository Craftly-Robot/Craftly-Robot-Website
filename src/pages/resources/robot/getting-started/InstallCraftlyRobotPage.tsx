import DocsLayout from '../../DocsLayout';

export default function InstallCraftlyRobotPage() {
  return (
    <DocsLayout 
      title="Install Craftly Robot — Craftly Robot"
      description="Install Craftly Robot in Craftly Robot"
      tocItems={[
        { id: 'install-craftly-robot', label: 'Install Craftly Robot' },
        { id: 'device-side-inference', label: 'Device Side Inference' },
        { id: 'keep-the-app-updated', label: 'Keep the App Updated' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Getting Started &gt; <strong>Install Craftly Robot</strong>
      </div>

      <h1 className="docs__title" id="install-craftly-robot">Install Craftly Robot</h1>
      <p className="docs__text">
        Once your onboarding is complete and your Private Key is safely stored, install Craftly Robot from the official Craftly website:
      </p>
      <p className="docs__text">
        <a href="https://craftlyrobot.com" className="docs__link" target="_blank" rel="noopener noreferrer">craftlyrobot.com</a>
      </p>
      <p className="docs__text">
        Download the version available for your device and complete the installation.
      </p>
      <p className="docs__text">
        After installation, open the application and continue to the authentication flow.
      </p>

      <h2 className="docs__subtitle" id="device-side-inference">Device Side Inference</h2>
      <p className="docs__text">
        Craftly Robot is designed with on device AI inference as an important part of its product direction.
      </p>
      <p className="docs__text">
        The purpose is to make the core AI experience available on a normal smartphone rather than requiring every user to maintain a dedicated AI server.
      </p>
      <p className="docs__text">
        This also supports Craftly's broader interest in decentralized and distributed intelligence: useful computation can happen closer to the user instead of assuming that all intelligence must live in one centralized location.
      </p>
      <p className="docs__text">
        The actual speed, memory requirements, model behavior, and available features can vary by device and Robot version.
      </p>

      <h2 className="docs__subtitle" id="keep-the-app-updated">Keep the App Updated</h2>
      <p className="docs__text">
        Robot is an actively evolving product. New versions may improve:
      </p>
      <ul className="docs__list">
        <li>Model behavior</li>
        <li>Agent capabilities</li>
        <li>Discovery</li>
        <li>Negotiation</li>
        <li>Device performance</li>
        <li>Security</li>
        <li>Reliability</li>
        <li>User experience</li>
      </ul>
      <p className="docs__text">
        Use the official Craftly distribution channel to obtain the latest supported version.
      </p>
    </DocsLayout>
  );
}
