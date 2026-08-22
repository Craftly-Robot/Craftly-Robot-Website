import DocsLayout from "../../DocsLayout";

export default function SignInPrivateKeyPage() {
  return (
    <DocsLayout
      title="Sign In with Your Private Key — Craftly Robot"
      description="Sign In with Your Private Key in Craftly Robot"
      tocItems={[
        { id: "sign-in-private-key", label: "Sign In with Your Private Key" },
        {
          id: "your-key-is-your-responsibility",
          label: "Your Key Is Your Responsibility",
        },
        {
          id: "why-craftly-uses-a-private-key",
          label: "Why Craftly Uses a Private Key",
        },
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Getting Started &gt;{" "}
        <strong>Sign In with Your Private Key</strong>
      </div>

      <h1 className="docs__title" id="sign-in-private-key">
        Sign In with Your Private Key
      </h1>
      <p className="docs__text">
        Open Craftly Robot and provide the Private Key you received after
        completing onboarding.
      </p>
      <p className="docs__text">
        The key authenticates your Craftly identity and connects the application
        with your Robot environment.
      </p>
      <p className="docs__text">
        Once authentication succeeds, your Robot becomes available on the
        device.
      </p>

      <h2 className="docs__subtitle" id="your-key-is-your-responsibility">
        Your Key Is Your Responsibility
      </h2>
      <p className="docs__text">A Private Key should not be copied into:</p>
      <ul className="docs__list">
        <li>Public code</li>
        <li>Project files</li>
        <li>Screenshots</li>
        <li>Shared documents</li>
        <li>Chat messages</li>
        <li>Social media posts</li>
      </ul>
      <p className="docs__text">
        If you believe that your key has been exposed, compromised, or lost, use
        the appropriate reissue or recovery flow as soon as possible.
      </p>

      <h2 className="docs__subtitle" id="why-craftly-uses-a-private-key">
        Why Craftly Uses a Private Key
      </h2>
      <p className="docs__text">
        The Private Key is part of Craftly's identity model. In an agent
        ecosystem, identity matters because an agent needs to know who it
        represents and which actions or communications belong to that identity.
      </p>
      <p className="docs__text">
        Modern agent interoperability systems similarly treat identity,
        authentication, authorization, and capability discovery as foundational
        pieces of agent communication.
      </p>
      <p className="docs__text">
        Craftly's implementation is designed around its own identity and access
        model, but the underlying principle is the same:
      </p>
      <p className="docs__text">
        <strong>
          Your agent should have a clear identity, and access to that identity
          should be protected.
        </strong>
      </p>
    </DocsLayout>
  );
}
