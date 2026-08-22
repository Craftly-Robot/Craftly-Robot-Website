import DocsLayout from '../../DocsLayout';

export default function PrivateKeyPage() {
  return (
    <DocsLayout 
      title="Private Key — Craftly Workspace"
      description="Private Key in Craftly Workspace"
      tocItems={[
        { id: 'private-key', label: 'Private Key' },
        { id: 'keep-your-key-safe', label: 'Keep Your Key Safe' },
        { id: 'lose-key-logged-in', label: 'If You Lose Your Key While Logged In' },
        { id: 'lose-key-logged-out', label: 'If You Lose Your Key While Logged Out' },
        { id: 'important', label: 'Important' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Onboarding &gt; <strong>Private Key</strong>
      </div>

      <h1 className="docs__title" id="private-key">Private Key</h1>
      
      <p className="docs__text">
        Your Private Key is one of the most important parts of your Craftly identity.
      </p>
      
      <p className="docs__text">
        It is required to log in to Craftly Workspace and Craftly Robot, so keep your Private Key safe and never share it with anyone.
      </p>
      
      <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #eaeaeb', backgroundColor: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '32px 0', padding: '16px' }}>
        <img 
          src="/assets/private_key/1.png" 
          alt="Private Key" 
          style={{ maxWidth: '200px', width: '100%', display: 'block' }} 
        />
      </div>

      <h2 className="docs__section-title" id="keep-your-key-safe">Keep Your Key Safe</h2>
      <p className="docs__text">
        Your Private Key should be treated as a sensitive credential.
      </p>
      <ul className="docs__list">
        <li>Do not share it with anyone.</li>
        <li>Do not post it publicly.</li>
        <li>Do not store it somewhere you may lose access to.</li>
        <li>Keep a secure backup in a trusted location.</li>
      </ul>

      <h2 className="docs__section-title" id="lose-key-logged-in">If You Lose Your Key While Logged In</h2>
      <p className="docs__text">
        If you are still logged in to Craftly Workspace, you can go to your Profile and generate a new Private Key reissue.
      </p>
      <p className="docs__text">
        After the new key is issued, use the new key for your future Workspace logins.
      </p>

      <h2 className="docs__section-title" id="lose-key-logged-out">If You Lose Your Key While Logged Out</h2>
      <p className="docs__text">
        If you lose your Private Key while you are already logged out, you cannot immediately reissue it through Workspace because you no longer have an active authenticated session.
      </p>
      <p className="docs__text">
        Craftly is currently developing a verification based recovery system that will allow verified members to recover and generate a new Private Key through the Craftly Robot.
      </p>
      <p className="docs__text">
        Until that system is available, losing your key while logged out may require you to go through the appropriate account recovery or re-onboarding process.
      </p>

      <h2 className="docs__section-title" id="important">Important</h2>
      <p className="docs__text">
        Your Private Key is currently a sensitive part of your Craftly identity.
      </p>
      <p className="docs__text">
        Stay logged in while requesting a reissue if you have lost your key. Keep your Private Key somewhere safe, and never share it with another person.
      </p>
      <p className="docs__text">
        The recovery system is being developed to make lost key recovery safer and more convenient while still protecting the identity of Craftly members.
      </p>

    </DocsLayout>
  );
}
