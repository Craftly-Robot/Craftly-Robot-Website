import { Helmet } from 'react-helmet-async';
import './ChangelogPage.css';

export default function ChangelogPage() {
  return (
    <>
      <Helmet>
        <title>Changelog | Craftly</title>
        <meta name="description" content="Latest updates and improvements to Craftly Workspace and Craftly Robot." />
      </Helmet>

      <main className="changelog-page">
        <div className="container">
          <div className="changelog-hero">
            <h1 className="changelog-hero__title">Changelog</h1>
            <p className="changelog-hero__desc">
              Stay up to date with the latest features, improvements, and bug fixes for Craftly Workspace and Craftly Robot.
            </p>
          </div>

          <div className="changelog-content">
            {/* Version 2.8.0 */}
            <div className="changelog-item">
              <div className="changelog-item__sidebar">
                <h2 className="changelog-item__version">2.8.0</h2>
                <div className="changelog-item__date">August 24, 2026</div>
              </div>
              <div className="changelog-item__body">
                <div className="changelog-group">
                  <span className="changelog-badge changelog-badge--new">New</span>
                  <ul className="changelog-list">
                    <li>Added multiple expandable accordion rows in Releases page.</li>
                    <li>Introduced a new grid-based design system for resource pages.</li>
                  </ul>
                </div>
                <div className="changelog-group">
                  <span className="changelog-badge changelog-badge--fixed">Fixed</span>
                  <ul className="changelog-list">
                    <li>Fixed navigation link missing on the Changelog page.</li>
                    <li>Resolved an issue where accordion toggles were improperly aligned.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Version 2.7.1 */}
            <div className="changelog-item">
              <div className="changelog-item__sidebar">
                <h2 className="changelog-item__version">2.7.1</h2>
                <div className="changelog-item__date">July 15, 2026</div>
              </div>
              <div className="changelog-item__body">
                <div className="changelog-group">
                  <span className="changelog-badge changelog-badge--improved">Improved</span>
                  <ul className="changelog-list">
                    <li>Performance optimizations for Craftly Robot execution engine.</li>
                    <li>Enhanced the visual hierarchy of typography across all product pages.</li>
                  </ul>
                </div>
                <div className="changelog-group">
                  <span className="changelog-badge changelog-badge--fixed">Fixed</span>
                  <ul className="changelog-list">
                    <li>Minor bug fixes and UI layout shifts on mobile devices.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Version 2.6.0 */}
            <div className="changelog-item">
              <div className="changelog-item__sidebar">
                <h2 className="changelog-item__version">2.6.0</h2>
                <div className="changelog-item__date">June 2, 2026</div>
              </div>
              <div className="changelog-item__body">
                <div className="changelog-group">
                  <span className="changelog-badge changelog-badge--new">New</span>
                  <ul className="changelog-list">
                    <li>Introduced Antigravity IDE integration with Workspace.</li>
                    <li>Added comprehensive documentation for API webhooks.</li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </>
  );
}
