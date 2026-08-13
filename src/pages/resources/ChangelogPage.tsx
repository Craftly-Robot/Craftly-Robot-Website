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
            <div className="changelog-item">
              <div className="changelog-item__header">
                <h2>Version 2.8.0</h2>
                <span className="changelog-item__date">August 2026</span>
              </div>
              <ul className="changelog-item__list">
                <li>Added multiple expandable accordion rows in Releases.</li>
                <li>Redesigned the Releases grid layout to match the new design system.</li>
                <li>Fixed navigation link to the Changelog page.</li>
              </ul>
            </div>
            
            <div className="changelog-item">
              <div className="changelog-item__header">
                <h2>Version 2.7.1</h2>
                <span className="changelog-item__date">July 2026</span>
              </div>
              <ul className="changelog-item__list">
                <li>Performance optimizations for Craftly Robot execution engine.</li>
                <li>Minor bug fixes and UI improvements.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
