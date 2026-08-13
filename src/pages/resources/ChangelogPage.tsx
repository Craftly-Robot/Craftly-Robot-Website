import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './ChangelogPage.css';

// SVG Icons
const InfoIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg className={`cl-chevron ${isOpen ? 'open' : ''}`} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

type AccordionData = {
  type: string;
  count: number;
  items: string[];
};

type ReleaseData = {
  version: string;
  date: string;
  title: string;
  desc: string;
  accordions: AccordionData[];
};

const releases: ReleaseData[] = [
  {
    version: '2.8.0',
    date: 'August 12, 2026',
    title: 'Persistent Sidebar Folders, Crash Fixes, and UI Enhancements',
    desc: 'Craftly improves workspace organization by persisting your sidebar folder states. This release also ensures reliable file and artifact previews.',
    accordions: [
      {
        type: 'Improvements',
        count: 1,
        items: [
          "The sidebar now remembers which folders you have collapsed or expanded, including when you use the 'Collapse All' action, keeping your Projects list organized across sessions."
        ]
      },
      { type: 'Fixes', count: 6, items: [] },
      { type: 'Patches', count: 0, items: [] }
    ]
  },
  {
    version: '2.7.1',
    date: 'August 11, 2026',
    title: 'Reliability, Performance Gains, and User Experience Polish',
    desc: 'Craftly 2.7.1 introduces visual side-by-side previews for image diffs alongside comprehensive screen-reader and keyboard accessibility enhancements. This update also delivers key performance boosts, bug fixes, and UX refinements across chat interactions and project navigation.',
    accordions: [
      { type: 'Improvements', count: 11, items: [] },
      { type: 'Fixes', count: 20, items: [] },
      { type: 'Patches', count: 0, items: [] }
    ]
  },
  {
    version: '2.6.0',
    date: 'August 7, 2026',
    title: 'Faster long conversations, more reliable hooks and subagents',
    desc: 'Conversations with long histories now open faster, improved custom hooks and subagents behavior, and administrator policies for connected tool servers are applied correctly —',
    accordions: [
      { type: 'Improvements', count: 5, items: [] },
      { type: 'Fixes', count: 8, items: [] },
      { type: 'Patches', count: 1, items: [] }
    ]
  },
  {
    version: '2.5.0',
    date: 'July 31, 2026',
    title: 'Enterprise sign-in: Craftly Enterprise accounts and Workforce Identity Federation',
    desc: 'Added enterprise sign-in support for Craftly Enterprise user accounts (with admin controls) and Workforce Identity Federation via Advanced SSO.',
    accordions: [
      { type: 'Improvements', count: 20, items: [] },
      { type: 'Fixes', count: 13, items: [] },
      { type: 'Patches', count: 0, items: [] }
    ]
  },
  {
    version: '2.4.3',
    date: 'July 28, 2026',
    title: 'Preview tabs, MCP timeouts, file attachments, and performance fixes',
    desc: 'Added preview tabs, attachment support for .json, .md, and .csv files, MCP timeouts, keyboard shortcuts, and various bug fixes and improvements.',
    accordions: [
      { type: 'Improvements', count: 17, items: [] },
      { type: 'Fixes', count: 5, items: [] },
      { type: 'Patches', count: 2, items: [] }
    ]
  }
];

export default function ChangelogPage() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    '2.8.0-Improvements': true // Default open the first one to match screenshot
  });

  const toggle = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <Helmet>
        <title>Changelog | Craftly</title>
        <meta name="description" content="Latest updates and improvements to Craftly Workspace and Craftly Robot." />
      </Helmet>

      <main className="changelog-page">
        <div className="container">
          
          <div className="changelog-hero">
            <div className="changelog-hero__top">
              <h1 className="changelog-hero__title">Craftly Changelog</h1>
              <div className="changelog-actions">
                <a href="/docs" className="btn-pill">View docs</a>
                <a href="https://x.com/craftly" target="_blank" rel="noopener noreferrer" className="btn-pill">Follow us on X</a>
              </div>
            </div>
            
            <div className="changelog-tabs">
              <button className="changelog-tab active">Craftly 2.0</button>
              <button className="changelog-tab">Craftly CLI</button>
              <button className="changelog-tab">Craftly SDK</button>
              <button className="changelog-tab">Craftly IDE</button>
            </div>
          </div>

          <div className="changelog-banner">
            <InfoIcon />
            <span>New versions are rolled out gradually and may take a few days to reach all users.</span>
          </div>

          <div className="changelog-list-header">
            <div className="changelog-col-title">Version</div>
            <div className="changelog-col-title">Description</div>
          </div>

          <div className="changelog-list">
            {releases.map((release) => (
              <div className="changelog-item" key={release.version}>
                <div className="changelog-item__left">
                  <div className="cl-version">{release.version}</div>
                  <div className="cl-date">{release.date}</div>
                </div>
                
                <div className="changelog-card">
                  <h2 className="changelog-card__title">{release.title}</h2>
                  
                  <div className="changelog-card__body">
                    <p className="changelog-card__desc">{release.desc}</p>
                    
                    <div className="changelog-accordions">
                      {release.accordions.map((acc) => {
                        const id = `${release.version}-${acc.type}`;
                        const isOpen = expanded[id] || false;
                        return (
                          <div className="cl-accordion" key={acc.type}>
                            <button className="cl-accordion__toggle" onClick={() => toggle(id)}>
                              <span>{acc.type} ({acc.count})</span>
                              <ChevronIcon isOpen={isOpen} />
                            </button>
                            {isOpen && acc.items.length > 0 && (
                              <div className="cl-accordion__content">
                                <ul>
                                  {acc.items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </>
  );
}
