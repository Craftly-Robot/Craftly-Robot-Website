import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import './TaskLifecycle.css';

const STAGES = [
  'Assigned',
  'In Progress',
  'Submission',
  'Review',
  'Completed'
];

export function TaskLifecycle() {
  const [currentStage, setCurrentStage] = useState(0);
  const [inView, setInView] = useState(false);
  const revealRef = useScrollReveal();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % STAGES.length);
    }, 2000); // Change stage every 2 seconds

    return () => clearInterval(interval);
  }, [inView]);

  return (
    <div className="task-lifecycle reveal" ref={revealRef}>
      <div className="task-lifecycle__container" ref={containerRef}>
        
        {/* Progress Bar Header */}
        <div className="task-lifecycle__progress-bar">
          {STAGES.map((stage, index) => (
            <div 
              key={stage} 
              className={`task-lifecycle__step ${index <= currentStage ? 'is-active' : ''} ${index === currentStage ? 'is-current' : ''}`}
            >
              <div className="task-lifecycle__step-dot" />
              <span className="task-lifecycle__step-label">{stage}</span>
            </div>
          ))}
          <div className="task-lifecycle__progress-line" />
        </div>

        {/* Task Card Visual */}
        <div className="task-lifecycle__card">
          <div className="task-lifecycle__card-header">
            <span className="task-lifecycle__card-id">TSK-204</span>
            <span className={`task-lifecycle__card-status status-${currentStage}`}>
              {STAGES[currentStage]}
            </span>
          </div>
          <h4 className="task-lifecycle__card-title">Q3 Financial Audit Review</h4>
          
          <div className="task-lifecycle__card-body">
            <div className="task-lifecycle__card-line" />
            <div className="task-lifecycle__card-line short" />
            
            <div className={`task-lifecycle__evidence ${currentStage >= 2 ? 'is-visible' : ''}`}>
              <div className="task-lifecycle__evidence-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className="task-lifecycle__evidence-details">
                <span className="task-lifecycle__evidence-name">audit_report_final.pdf</span>
                <span className="task-lifecycle__evidence-meta">Attached by Executive • 2.4 MB</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
