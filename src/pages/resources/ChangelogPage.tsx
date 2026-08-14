import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ChangelogPage.css';

function TypewriterTitle({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <h1 className="changelog-hero__title">
      {displayedText}
      <span className="typewriter-cursor">|</span>
    </h1>
  );
}

// SVG Icons
const InfoIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg className={`cl-chevron ${isOpen ? 'open' : ''}`} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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

const workspaceReleases: ReleaseData[] = [
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
      {
        type: 'Fixes',
        count: 6,
        items: [
          "Fixed an issue that prevented submitting or dismissing the feedback form on the welcome screen.",
          "Fixed frequent application crashes when opening conversations that contain large command outputs. The file viewer now limits the size of files it will display, and large changes in the history are limited to ensure stability.",
          "Fixed a styling issue where inline code in chat messages and the file viewer did not display in the correct colors.",
          "Fixed a layout bug that caused multi-line commands to display without line breaks in the activity history.",
          "Fixed an issue where the application header and top menu bar failed to display on Linux.",
          "Fixed an issue where empty section headers (such as \"Terminal\") appeared in Settings when all contained settings were disabled."
        ]
      },
      { type: 'Patches', count: 0, items: [] }
    ]
  },
  {
    version: '2.7.1',
    date: 'August 11, 2026',
    title: 'Reliability, Performance Gains, and User Experience Polish',
    desc: 'Craftly 2.7.1 introduces visual side-by-side previews for image diffs alongside comprehensive screen-reader and keyboard accessibility enhancements. This update also delivers key performance boosts, bug fixes, and UX refinements across chat interactions and project navigation.',
    accordions: [
      {
        type: 'Improvements',
        count: 2,
        items: [
          "Added side-by-side visual previews for image diffs.",
          "Enhanced keyboard navigation and screen reader support."
        ]
      },
      {
        type: 'Fixes',
        count: 2,
        items: [
          "Resolved performance issues during long interactions.",
          "Fixed an issue with project navigation state."
        ]
      },
      { type: 'Patches', count: 0, items: [] }
    ]
  },
  {
    version: '2.6.0',
    date: 'August 7, 2026',
    title: 'Faster long conversations, more reliable hooks and subagents',
    desc: 'Conversations with long histories now open faster, improved custom hooks and subagents behavior, and administrator policies for connected tool servers are applied correctly —',
    accordions: [
      {
        type: 'Improvements',
        count: 2,
        items: [
          "Faster loading times for conversations with long histories.",
          "Administrator policies for connected tool servers are now applied correctly."
        ]
      },
      {
        type: 'Fixes',
        count: 1,
        items: [
          "Improved custom hooks and subagents behavior for better reliability."
        ]
      },
      {
        type: 'Patches',
        count: 1,
        items: [
          "Security patch for third-party dependencies."
        ]
      }
    ]
  },
  {
    version: '2.5.0',
    date: 'July 31, 2026',
    title: 'Enterprise sign-in: Craftly Enterprise accounts and Workforce Identity Federation',
    desc: 'Added enterprise sign-in support for Craftly Enterprise user accounts (with admin controls) and Workforce Identity Federation via Advanced SSO.',
    accordions: [
      {
        type: 'Improvements',
        count: 2,
        items: [
          "Added enterprise sign-in support for Craftly Enterprise user accounts.",
          "Support for Workforce Identity Federation via Advanced SSO."
        ]
      },
      {
        type: 'Fixes',
        count: 2,
        items: [
          "Resolved an issue where admin controls were sometimes unresponsive.",
          "Fixed session expiration bugs for federated logins."
        ]
      },
      { type: 'Patches', count: 0, items: [] }
    ]
  },
  {
    version: '2.4.3',
    date: 'July 28, 2026',
    title: 'Preview tabs, MCP timeouts, file attachments, and performance fixes',
    desc: 'Added preview tabs, attachment support for .json, .md, and .csv files, MCP timeouts, keyboard shortcuts, and various bug fixes and improvements.',
    accordions: [
      {
        type: 'Improvements',
        count: 3,
        items: [
          "Added preview tabs for multiple concurrent views.",
          "Attachment support for .json, .md, and .csv files.",
          "Introduced new keyboard shortcuts for faster navigation."
        ]
      },
      {
        type: 'Fixes',
        count: 1,
        items: [
          "Fixed MCP timeouts occurring on large file uploads."
        ]
      },
      {
        type: 'Patches',
        count: 1,
        items: [
          "Various minor performance fixes."
        ]
      }
    ]
  },
  {
    version: '2.4.0',
    date: 'July 15, 2026',
    title: 'New Dashboard UI, Advanced Filters, and Global Search',
    desc: 'Completely redesigned the main dashboard for better usability. Introduced advanced filtering options and a blazing fast global search across all projects.',
    accordions: [
      {
        type: 'Improvements',
        count: 3,
        items: [
          "Redesigned the main dashboard for a cleaner, modern look.",
          "Added advanced filtering capabilities for complex project views.",
          "Global search is now powered by a faster indexing engine."
        ]
      },
      { type: 'Fixes', count: 0, items: [] },
      { type: 'Patches', count: 0, items: [] }
    ]
  },
  {
    version: '2.3.5',
    date: 'July 2, 2026',
    title: 'Team Collaboration Enhancements and Webhooks',
    desc: 'Added real-time cursor presence in collaborative files and introduced custom webhooks for integrating external services seamlessly.',
    accordions: [
      {
        type: 'Improvements',
        count: 2,
        items: [
          "Added real-time cursor presence for team collaboration.",
          "Introduced custom webhooks for external integrations."
        ]
      },
      {
        type: 'Fixes',
        count: 1,
        items: [
          "Fixed an issue with user avatars not loading correctly."
        ]
      },
      { type: 'Patches', count: 0, items: [] }
    ]
  },
  {
    version: '2.3.0',
    date: 'June 18, 2026',
    title: 'Custom Roles, Permissions, and API Keys',
    desc: 'Administrators can now create custom roles with highly granular permissions. API Keys management has also been revamped for better security.',
    accordions: [
      {
        type: 'Improvements',
        count: 2,
        items: [
          "Granular custom roles and permissions system.",
          "Revamped API keys management interface."
        ]
      },
      { type: 'Fixes', count: 0, items: [] },
      { type: 'Patches', count: 0, items: [] }
    ]
  },
  {
    version: '2.2.0',
    date: 'June 5, 2026',
    title: 'Dark Mode Support and Performance Upgrades',
    desc: 'Craftly Workspace now fully supports Dark Mode! We also rolled out major performance upgrades to the underlying state management.',
    accordions: [
      {
        type: 'Improvements',
        count: 2,
        items: [
          "Full Dark Mode support across the entire workspace.",
          "Major performance upgrades to state management."
        ]
      },
      {
        type: 'Fixes',
        count: 2,
        items: [
          "Fixed text contrast issues in certain UI components.",
          "Resolved sluggish scrolling on very large lists."
        ]
      },
      { type: 'Patches', count: 0, items: [] }
    ]
  }
];

const robotReleases: ReleaseData[] = [
  {
    version: '1.2.0',
    date: 'August 10, 2026',
    title: 'Advanced Reasoning Engine and Custom Agent Skills',
    desc: 'Craftly Robot now features an upgraded reasoning engine capable of breaking down highly complex multi-step workflows autonomously, alongside the ability to define custom skills for specialized tasks.',
    accordions: [
      {
        type: 'Improvements',
        count: 8,
        items: [
          "Introduced a new Advanced Reasoning Engine that significantly improves the robot's ability to handle ambiguous instructions.",
          "Added support for defining and attaching custom agent skills via JSON configurations.",
          "Enhanced the natural language parser to better interpret highly technical context and code snippets.",
          "Improved memory retention across long-running multi-agent negotiation sessions.",
          "Added fine-grained access control permissions for individual robot skills.",
          "Optimized internal routing for a 30% reduction in response latency during complex queries.",
          "Expanded the built-in standard library of agent skills with 15 new data-processing utilities.",
          "Introduced an interactive execution trace view for debugging reasoning steps in the Robot IDE."
        ]
      },
      {
        type: 'Fixes',
        count: 1,
        items: [
          "Fixed an issue with skill execution timeouts."
        ]
      },
      {
        type: 'Patches',
        count: 1,
        items: [
          "Minor memory leak patched in the reasoning engine."
        ]
      }
    ]
  },
  {
    version: '1.1.5',
    date: 'July 25, 2026',
    title: 'New Integration Capabilities and Coordination Fixes',
    desc: 'Improved real-time coordination between multiple Craftly Robots working in parallel. Added new native integrations for GitHub, Jira, and Slack.',
    accordions: [
      {
        type: 'Improvements',
        count: 2,
        items: [
          "Improved real-time coordination between parallel robots.",
          "Added GitHub, Jira, and Slack integrations."
        ]
      },
      {
        type: 'Fixes',
        count: 1,
        items: [
          "Resolved synchronization delays during multi-agent handoffs."
        ]
      },
      { type: 'Patches', count: 0, items: [] }
    ]
  },
  {
    version: '1.1.0',
    date: 'July 14, 2026',
    title: 'Multi-Agent Workflows and Department Task Allocation',
    desc: 'Craftly Robots can now dynamically assign sub-tasks to other specialized agents within the same department, improving parallel execution speed.',
    accordions: [
      {
        type: 'Improvements',
        count: 2,
        items: [
          "Dynamic sub-task assignment for specialized department agents.",
          "Faster parallel execution speed for complex requests."
        ]
      },
      {
        type: 'Fixes',
        count: 1,
        items: [
          "Fixed an issue where department routing failed on edge cases."
        ]
      },
      {
        type: 'Patches',
        count: 1,
        items: [
          "Patched minor visual bugs in the Task flow UI."
        ]
      }
    ]
  },
  {
    version: '1.0.8',
    date: 'June 28, 2026',
    title: 'Task Evidence Enhancements and Performance',
    desc: 'Enhanced task evidence collection. Robots now automatically take screenshots and log critical API requests during task execution for better auditing.',
    accordions: [
      {
        type: 'Improvements',
        count: 2,
        items: [
          "Enhanced task evidence collection with automatic screenshots.",
          "Critical API requests are now logged during task execution."
        ]
      },
      {
        type: 'Fixes',
        count: 1,
        items: [
          "Fixed an issue where some logs were dropped under heavy load."
        ]
      },
      {
        type: 'Patches',
        count: 1,
        items: [
          "Security update for the logging framework."
        ]
      }
    ]
  },
  {
    version: '1.0.0',
    date: 'June 10, 2026',
    title: 'Initial Release of Craftly Robot',
    desc: 'The highly anticipated first version of Craftly Robot is now generally available. Create, deploy, and manage autonomous agents directly from Craftly Workspace.',
    accordions: [
      {
        type: 'Improvements',
        count: 3,
        items: [
          "Initial general availability of Craftly Robot.",
          "Support for creating and deploying autonomous agents.",
          "Integration with Craftly Workspace for seamless management."
        ]
      },
      { type: 'Fixes', count: 0, items: [] },
    ]
  },
  {
    version: '0.9.5-beta',
    date: 'May 28, 2026',
    title: 'Beta Release: Open API and Custom Tools',
    desc: 'Craftly Robot enters Beta! You can now connect your own custom tools and use our Open API to interact with the reasoning engine.',
    accordions: [
      {
        type: 'Improvements',
        count: 2,
        items: [
          "Introduced Open API for early access developers.",
          "Support for connecting custom REST-based tools."
        ]
      },
      {
        type: 'Fixes',
        count: 1,
        items: [
          "Improved stability of long-running tool executions."
        ]
      },
      { type: 'Patches', count: 0, items: [] }
    ]
  },
  {
    version: '0.9.0-alpha',
    date: 'May 10, 2026',
    title: 'Alpha Release: Initial Agent Architecture',
    desc: 'First internal alpha release of Craftly Robot, featuring the core agent architecture and basic natural language processing capabilities.',
    accordions: [
      {
        type: 'Improvements',
        count: 2,
        items: [
          "Core agent architecture deployed to alpha environment.",
          "Basic NLP capabilities integrated."
        ]
      },
      { type: 'Fixes', count: 0, items: [] },
      { type: 'Patches', count: 0, items: [] }
    ]
  },
  {
    version: '0.8.5-alpha',
    date: 'April 25, 2026',
    title: 'Preview: Agent Memory and Context',
    desc: 'Early preview of the agent memory system, allowing robots to maintain context over a short series of interactions.',
    accordions: [
      {
        type: 'Improvements',
        count: 1,
        items: [
          "Experimental agent memory and context system."
        ]
      },
      { type: 'Fixes', count: 0, items: [] },
      { type: 'Patches', count: 0, items: [] }
    ]
  },
  {
    version: '0.8.0-alpha',
    date: 'April 10, 2026',
    title: 'Initial Prototype',
    desc: 'Initial proof-of-concept prototype for Craftly Robot demonstrating autonomous decision making in a sandboxed environment.',
    accordions: [
      {
        type: 'Improvements',
        count: 1,
        items: [
          "Proof-of-concept for autonomous decision making."
        ]
      },
      { type: 'Fixes', count: 0, items: [] },
      { type: 'Patches', count: 0, items: [] }
    ]
  }
];

export default function ChangelogPage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'workspace' | 'robot'>('workspace');
  const revealRef = useScrollReveal(undefined, [activeTab]);

  const toggle = (id: string) => {
    setExpanded(prev => (prev === id ? null : id));
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
              <TypewriterTitle text={`See what’s new\nacross Craftly`} />
              <div className="changelog-actions">
                <Link to="/resources/documentation" className="btn-pill">View docs</Link>
                <a href="https://x.com/Craftly_robot" target="_blank" rel="noopener noreferrer" className="btn-pill">Follow us on X</a>
              </div>
            </div>
            
            <div className="changelog-tabs">
              <button 
                className={`changelog-tab ${activeTab === 'workspace' ? 'active' : ''}`}
                onClick={() => setActiveTab('workspace')}
              >
                Craftly Workspace
              </button>
              <button 
                className={`changelog-tab ${activeTab === 'robot' ? 'active' : ''}`}
                onClick={() => setActiveTab('robot')}
              >
                Craftly Robot
              </button>
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

          <div className="changelog-list" ref={revealRef}>
            {(activeTab === 'workspace' ? workspaceReleases : robotReleases).map((release) => (
              <div className="changelog-item reveal" key={release.version}>
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
                          const isOpen = expanded === id;
                          return (
                            <div className="cl-accordion" key={acc.type}>
                              <button className="cl-accordion__toggle" onClick={() => toggle(id)}>
                                <span>{acc.type} ({acc.count})</span>
                                <ChevronIcon isOpen={isOpen} />
                              </button>
                              <div className={`cl-accordion__content ${isOpen ? 'is-open' : ''}`}>
                                <div className="cl-accordion__inner" style={{ paddingBottom: acc.items.length === 0 ? '16px' : undefined }}>
                                  {acc.items.length > 0 ? (
                                    <ul>
                                      {acc.items.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                      ))}
                                    </ul>
                                  ) : (
                                    <div style={{ color: '#3c4043', fontStyle: 'italic', paddingLeft: '16px', fontSize: '15px' }}>
                                      No {acc.type.toLowerCase()} in this release.
                                    </div>
                                  )}
                                </div>
                              </div>
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
