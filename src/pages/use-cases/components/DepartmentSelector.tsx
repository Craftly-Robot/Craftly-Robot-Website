import { useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import './DepartmentSelector.css';

const DEPARTMENTS = [
  {
    id: 'operations',
    name: 'Operations',
    resources: ['Projects', 'Tasks', 'Technical Resources', 'Protocols']
  },
  {
    id: 'hr',
    name: 'HR',
    resources: ['People', 'Training', 'Onboarding', 'Compliance']
  },
  {
    id: 'marketing',
    name: 'Marketing',
    resources: ['Campaigns', 'Content', 'Brand Resources', 'Analytics']
  },
  {
    id: 'finance',
    name: 'Finance',
    resources: ['Financial Resources', 'Records', 'Planning', 'Procurement']
  }
];

export function DepartmentSelector() {
  const [activeDept, setActiveDept] = useState(DEPARTMENTS[0].id);
  const revealRef = useScrollReveal();

  const currentDept = DEPARTMENTS.find(d => d.id === activeDept);

  return (
    <div className="department-selector reveal" ref={revealRef}>
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
      
      <div className="department-selector__content">
        <div className="department-selector__grid">
          {currentDept?.resources.map((resource, index) => (
            <div key={`${currentDept.id}-${index}`} className="department-selector__card">
              <span className="department-selector__card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
              </span>
              <span className="department-selector__card-title">{resource}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
