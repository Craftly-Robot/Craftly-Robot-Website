import DocPage from "../DocPage";

export default function CloudSecurityPrivacyPage() {
  return (
    <DocPage
      title="Security & Privacy — Craftly Documentation"
      description="Security, isolation, and privacy principles of Craftly Cloud."
      crumbs={["Documentation", "Craftly Cloud", "Security & Privacy"]}
      pageId="security-privacy"
      pageTitle="Security & Privacy"
      tocItems={[
        { id: "sandboxed-isolation", label: "Strict Sandboxed Isolation" },
        { id: "zero-personal-access", label: "Zero Access to Personal Files" },
        { id: "encrypted-traffic", label: "Encrypted Network Communications" },
        { id: "signed-code", label: "Signed Binaries & Vetted Workloads" },
      ]}
    >
      <p className="docs__text">
        Craftly Cloud was built with a fundamental security rule: <strong>Your computer is your personal device first.</strong> Connecting your machine to the network must never compromise your private files, browsing data, credentials, or personal safety.
      </p>

      <h2 className="docs__heading" id="sandboxed-isolation">
        Strict Sandboxed Isolation
      </h2>
      <p className="docs__text">
        Every compute task executed on your computer runs inside a strictly isolated, unprivileged sandbox.
      </p>
      <ul className="docs__list">
        <li>
          <strong>Memory Isolation:</strong> Tasks run within their own isolated memory space. They cannot inspect, read, or alter memory belonging to other applications running on your machine.
        </li>
        <li>
          <strong>No Kernel Privilege:</strong> Craftly never requires root, kernel-level drivers, or administrator privileges to execute compute workloads.
        </li>
      </ul>

      <h2 className="docs__heading" id="zero-personal-access">
        Zero Access to Personal Files
      </h2>
      <p className="docs__text">
        The Craftly compute engine operates in a chrooted virtual scratch directory. It has strictly <strong>no read or write access</strong> to:
      </p>
      <ul className="docs__list">
        <li>Your Desktop, Documents, Downloads, or Pictures folders.</li>
        <li>Browser sessions, saved passwords, or cookie stores.</li>
        <li>Keyboards, mice, webcams, or microphone input streams.</li>
      </ul>

      <h2 className="docs__heading" id="encrypted-traffic">
        Encrypted Network Communications
      </h2>
      <p className="docs__text">
        All communication between your node and the Craftly orchestrator uses TLS 1.3 encryption with mutual cryptographic certificate verification. No inbound ports or open firewall exceptions are ever opened on your router. Your machine only initiates outbound HTTPS/WSS connections, keeping your home or office local network invisible and secure from external scans.
      </p>

      <h2 className="docs__heading" id="signed-code">
        Signed Binaries &amp; Vetted Workloads
      </h2>
      <p className="docs__text">
        Craftly Cloud does not allow arbitrary, unverified code to run across the network. All workloads undergo static analysis and automated verification before distribution. Furthermore, all official Craftly Desktop client updates are cryptographically signed with validated developer certificates.
      </p>
    </DocPage>
  );
}
