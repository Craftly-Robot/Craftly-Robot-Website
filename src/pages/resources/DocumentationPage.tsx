import DocsLayout from './DocsLayout';

export default function DocumentationPage() {
  return (
    <DocsLayout 
      title="Getting Started with Craftly Workspace"
      description="Learn how to download and install Craftly Workspace"
    >
      <div className="docs__breadcrumb">
        Craftly Workspace &gt; <strong>Getting Started</strong>
      </div>
      
      <h1 className="docs__title" id="getting-started">Getting Started with Craftly Workspace</h1>
      
      <h2 className="docs__section-title" id="download">Download</h2>
      <p className="docs__text">
        Visit <a href="#" className="docs__link">craftly.com/download</a> to download Craftly Workspace 1.2.0.
      </p>
      <ul className="docs__list">
        <li><strong>macOS:</strong> macOS versions with Apple security update support. This is typically the current and two previous versions. Min Version 12 (Monterey), X86 is not supported.</li>
        <li><strong>Windows:</strong> Windows 10 (64 bit)</li>
        <li><strong>Linux:</strong> glibc &gt;= 2.28, glibcxx &gt;= 3.4.25 (e.g. Ubuntu 20, Debian 10, Fedora 36, RHEL 8)</li>
      </ul>

      <h2 className="docs__section-title" id="installation">Installation</h2>
      <p className="docs__text">
        You may get a notification asking whether you want to “Keep Both” or “Replace” Craftly Workspace, select “Replace.” You will be prompted to re-install the IDE during installation, should you choose to. If you do not install it now and would like to re-download it later, you can do so <a href="#" className="docs__link">here</a>.
      </p>
    </DocsLayout>
  );
}
