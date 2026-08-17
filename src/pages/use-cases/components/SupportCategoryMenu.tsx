import { useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import DropdownIcon from '../../../components/ui/DropdownIcon';
import './SupportCategoryMenu.css';

const CATEGORIES = [
  { id: 'unit_commander', title: 'Unit Commander', desc: 'Direct escalation to your immediate operational leader for process blocking issues.' },
  { id: 'technical', title: 'Technical Issue', desc: 'Hardware, software, access, or infrastructure problems requiring IT intervention.' },
  { id: 'legal', title: 'Legal / Safety', desc: 'Compliance, workplace safety, or legal concerns requiring immediate attention.' },
  { id: 'attendance', title: 'Attendance', desc: 'Leave requests, schedule adjustments, and availability notifications.' },
  { id: 'ethics', title: 'Ethics', desc: 'Confidential reporting for workplace conduct and policy violations.' },
  { id: 'suggestions', title: 'Suggestions', desc: 'Proposals for process improvement or operational efficiency.' },
  { id: 'private_key', title: 'Private Key', desc: 'Recovery or management of your cryptographic identity and access tokens.' }
];

export function SupportCategoryMenu() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const revealRef = useScrollReveal();

  return (
    <div className="support-menu reveal" ref={revealRef}>
      <div className="support-menu__list">
        {CATEGORIES.map(category => {
          const isExpanded = expandedId === category.id;
          return (
            <div 
              key={category.id} 
              className={`support-menu__item ${isExpanded ? 'is-expanded' : ''}`}
            >
              <button 
                className="support-menu__trigger"
                onClick={() => setExpandedId(isExpanded ? null : category.id)}
                aria-expanded={isExpanded}
              >
                <span className="support-menu__title">{category.title}</span>
                <span className="support-menu__icon">
                  <DropdownIcon isOpen={isExpanded} size={22} />
                </span>
              </button>
              <div 
                className="support-menu__content" 
                style={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
              >
                <div className="support-menu__content-inner">
                  {category.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

