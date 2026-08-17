import { useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import './DepartmentSelector.css';

const DEPARTMENTS = [
  {
    id: 'operations',
    name: 'Operations',
    resources: [
      { name: 'Projects', desc: 'Active organizational initiatives and timelines', icon: 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z' },
      { name: 'Tasks', desc: 'Daily assignments and block tracking', icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8' },
      { name: 'Protocols', desc: 'Standard operating procedures', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
      { name: 'Technical', desc: 'Systems access and infrastructure', icon: 'M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16' }
    ]
  },
  {
    id: 'hr',
    name: 'HR',
    resources: [
      { name: 'People', desc: 'Employee directory and org chart', icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75' },
      { name: 'Training', desc: 'Skill development and courses', icon: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z' },
      { name: 'Onboarding', desc: 'New hire checklists and access', icon: 'M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M8.5 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M20 8v6 M23 11h-6' },
      { name: 'Compliance', desc: 'Legal and regulatory requirements', icon: 'M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11' }
    ]
  },
  {
    id: 'marketing',
    name: 'Marketing',
    resources: [
      { name: 'Campaigns', desc: 'Active marketing initiatives', icon: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z' },
      { name: 'Content', desc: 'Copy, graphics, and assets', icon: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M17 8l-5-5-5 5 M12 3v12' },
      { name: 'Brand', desc: 'Logos, colors, and typography', icon: 'M12 2l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1z' },
      { name: 'Analytics', desc: 'Performance and metrics tracking', icon: 'M18 20V10 M12 20V4 M6 20v-6' }
    ]
  },
  {
    id: 'finance',
    name: 'Finance',
    resources: [
      { name: 'Ledger', desc: 'Financial tracking and reporting', icon: 'M3 3h18v18H3z M3 9h18 M9 21V9' },
      { name: 'Planning', desc: 'Budgets and forecasts', icon: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2 M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z' },
      { name: 'Procurement', desc: 'Vendor and purchase requests', icon: 'M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z M3 6h18 M16 10a4 4 0 0 1-8 0' },
      { name: 'Records', desc: 'Tax, legal, and company files', icon: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4 M14 2v6h6 M3 15h6 M3 18h6' }
    ]
  }
];

export function DepartmentSelector() {
  const [activeDept, setActiveDept] = useState(DEPARTMENTS[0].id);
  const revealRef = useScrollReveal();

  const currentDept = DEPARTMENTS.find(d => d.id === activeDept);

  return (
    <div className="department-selector reveal" ref={revealRef}>
      <div className="department-selector__tabs-wrapper">
        <div className="department-selector__tabs">
          {DEPARTMENTS.map(dept => (
            <button
              key={dept.id}
              className={`department-selector__tab ${activeDept === dept.id ? 'is-active' : ''}`}
              onClick={() => setActiveDept(dept.id)}
            >
              {dept.name}
            </button>
          ))}
        </div>
      </div>
      
      <div className="department-selector__content">
        <div className="department-selector__grid">
          {currentDept?.resources.map((resource, index) => (
            <div key={`${currentDept.id}-${index}`} className="department-selector__card">
              <div className="department-selector__card-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {resource.icon.split(' M').map((pathD, i) => (
                    <path key={i} d={i === 0 ? pathD : `M${pathD}`} />
                  ))}
                </svg>
              </div>
              <div className="department-selector__card-text">
                <span className="department-selector__card-title">{resource.name}</span>
                <span className="department-selector__card-desc">{resource.desc}</span>
              </div>
              <div className="department-selector__card-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
