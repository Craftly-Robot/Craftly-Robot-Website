import DocsLayout from '../../DocsLayout';
import notice1 from '../../../../assets/Notice Board/1.jpg';
import notice2 from '../../../../assets/Notice Board/2.jpg';

export default function NoticesPage() {
  return (
    <DocsLayout 
      title="Notice Board — Craftly Workspace"
      description="Notice Board in Craftly Workspace"
      tocItems={[
        { id: 'notice-board', label: 'Notice Board' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Tasks & Operations &gt; <strong>Notice Board</strong>
      </div>

      <h1 className="docs__title" id="notice-board">Notice Board</h1>
      
      <p className="docs__text">
        The Notice Board is the official place for sharing organizational notices and messages.
      </p>
      
      <p className="docs__text">
        Any official announcement, important message, update, instruction, or information that needs to be communicated to members can be published on the Notice Board.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', margin: '40px 0' }}>
        <div className="docs__image-wrapper" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <img src={notice1} alt="Notice Board 1" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div className="docs__image-wrapper" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <img src={notice2} alt="Notice Board 2" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      </div>
    </DocsLayout>
  );
}
