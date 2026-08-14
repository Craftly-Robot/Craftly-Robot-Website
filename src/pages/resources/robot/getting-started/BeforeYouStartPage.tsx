import DocsLayout from '../../DocsLayout';

export default function BeforeYouStartPage() {
  return (
    <DocsLayout 
      title="Before You Start â€” Craftly Robot"
      description="Before You Start in Craftly Robot"
      tocItems={[
        { id: 'before-you-start', label: 'Before You Start' },
        { id: 'what-you-need', label: 'What You Need' },
        { id: 'protect-your-private-key', label: 'Protect Your Private Key' },
        { id: 'lost-key-recovery', label: 'Lost-Key Recovery' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Getting Started &gt; <strong>Before You Start</strong>
      </div>

      <h1 className="docs__title" id="before-you-start">Before You Start</h1>
      <p className="docs__text">
        Before you can use Craftly Robot, you need to establish your identity within the Craftly ecosystem and have the credentials required to access your Robot.
      </p>
      <p className="docs__text">
        The first step is to complete Craftly onboarding. Once onboarding is completed, Craftly provides you with a Private Key associated with your identity.
      </p>
      <p className="docs__text">
        Your Private Key is the credential you use to authenticate your access to Craftly Robot. It should be treated as highly sensitive information.
      </p>

      <h2 className="docs__subtitle" id="what-you-need">What You Need</h2>
      <p className="docs__text">
        Before starting, make sure you have:
      </p>
      <ul className="docs__list">
        <li>Completed Craftly onboarding</li>
        <li>Your Craftly Private Key</li>
        <li>A supported smartphone</li>
        <li>An active internet connection</li>
      </ul>
      <p className="docs__text">
        You do not need a dedicated AI server or a separate GPU workstation to begin using Robot. Craftly Robot is designed around device-side inference, allowing the AI experience to run on the user's phone. The exact performance and available capabilities can depend on the device and the current Robot build.
      </p>

      <h2 className="docs__subtitle" id="protect-your-private-key">Protect Your Private Key</h2>
      <p className="docs__text">
        Your Private Key is part of your Craftly identity and should never be treated like an ordinary piece of information.
      </p>
      <p className="docs__text">Never:</p>
      <ul className="docs__list">
        <li>Share it with another person</li>
        <li>Send it through WhatsApp, Messenger, email, or another messaging service</li>
        <li>Upload it to GitHub or another public repository</li>
        <li>Put it inside screenshots or publicly accessible documents</li>
        <li>Give it to someone simply because they claim to be providing technical support</li>
      </ul>
      <p className="docs__text">
        Store it securely and keep a private backup.
      </p>

      <h2 className="docs__subtitle" id="lost-key-recovery">Lost-Key Recovery</h2>
      <p className="docs__text">
        If you lose your Private Key while you are still authenticated inside Robot, the current profile-based reissue flow may allow you to generate a new key.
      </p>
      <p className="docs__text">
        If you lose your key while logged out, recovery is more difficult because you no longer have an authenticated session.
      </p>
      <p className="docs__text">
        Craftly is building a verification-based recovery mechanism for this case so that a member can prove their identity and generate a replacement credential.
      </p>
      <p className="docs__text">
        Until that recovery flow is fully available, the safest rule is simple:
      </p>
      <p className="docs__text">
        <strong>Do not lose your Private Key, and never share it.</strong>
      </p>
    </DocsLayout>
  );
}
