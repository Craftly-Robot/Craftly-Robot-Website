import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { Lottie } from "lottie-react";
import tikAnimation from "../../../assets/tik_animation.json";
import './ProjectWorkflowTerminal.css';

const WORKFLOW_STEPS = [
  { id: 'project', label: 'Initialize Project', command: 'agy new project --name "Q3 Architecture"', output: 'Project initialized.\nLoading workspace configuration...' },
  { id: 'agent', label: 'Read AGENT.md', command: 'cat AGENT.md', output: 'Reading agent instructions...\nStrict adherence to monochrome identity confirmed.' },
  { id: 'mcp', label: 'Connect MCP', command: 'mcp connect --context "Q3 Architecture"', output: 'Connected to Context Server.\nAccessing historical reports...' },
  { id: 'git', label: 'Git Checkout', command: 'git checkout -b feature/q3-architecture', output: 'Switched to a new branch \'feature/q3-architecture\'' },
  { id: 'code', label: 'Write Code', command: 'agy execute --task "Implement new architecture"', output: 'Writing components...\nRefactoring modules...\nCode generation complete.' },
  { id: 'testing', label: 'Testing', command: 'npm run test', output: 'Running test suite...\nPASS  src/architecture.test.ts\nAll tests passed (14/14).' },
  { id: 'submission', label: 'Submission', command: 'git push origin feature/q3-architecture && pr create', output: 'Pushing to remote...\nPR created: "Feature: Q3 Architecture"\nAwaiting review.' }
];

export function ProjectWorkflowTerminal() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedCommand, setDisplayedCommand] = useState('');
  const [inView, setInView] = useState(false);
  const revealRef = useScrollReveal();
  const containerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [displayedCommand, currentStep, isTyping]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
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

    let isMounted = true;

    const runStep = async () => {
      const step = WORKFLOW_STEPS[currentStep];
      if (isMounted) setIsTyping(true);
      if (isMounted) setDisplayedCommand('');
      
      // Type out command
      for (let i = 0; i <= step.command.length; i++) {
        if (!isMounted) return;
        setDisplayedCommand(step.command.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      
      if (isMounted) setIsTyping(false);
      
      // Wait to show output, then wait before next step
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      if (isMounted) setCurrentStep((prev) => (prev + 1) % WORKFLOW_STEPS.length);
    };

    runStep();

    return () => {
      isMounted = false;
    };
  }, [currentStep, inView]);

  return (
    <div className="terminal-workflow reveal" ref={revealRef}>
      <div className="terminal-workflow__container" ref={containerRef}>
        
        {/* Sidebar Steps */}
        <div className="terminal-workflow__sidebar">
          {WORKFLOW_STEPS.map((step, index) => (
            <div 
              key={step.id} 
              className={`terminal-workflow__sidebar-item ${index === currentStep ? 'is-active' : ''} ${index < currentStep ? 'is-completed' : ''}`}
            >
              <span className="terminal-workflow__sidebar-icon">
                {index < currentStep ? (
                  <Lottie src={tikAnimation} loop={false} autoplay={true} style={{ width: 30, height: 30, flexShrink: 0 }} />
                ) : index === currentStep ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                ) : null}
              </span>
              <span className="terminal-workflow__sidebar-label">{step.label}</span>
            </div>
          ))}
        </div>

        {/* Terminal Window */}
        <div className="terminal-workflow__window">
          <div className="terminal-workflow__window-header">
            <div className="terminal-workflow__window-dots">
              <span /><span /><span />
            </div>
            <div className="terminal-workflow__window-title">workspace ~ craftly-robot</div>
          </div>
          
          <div className="terminal-workflow__window-body" ref={bodyRef}>
            <div className="terminal-workflow__history">
              {WORKFLOW_STEPS.slice(0, currentStep).map((step, index) => (
                <div key={`history-${index}`} className="terminal-workflow__history-item">
                  <div className="terminal-workflow__line">
                    <span className="terminal-workflow__prompt">$</span>
                    <span className="terminal-workflow__command">{step.command}</span>
                  </div>
                  <div className="terminal-workflow__output">{step.output}</div>
                </div>
              ))}
            </div>

            <div className="terminal-workflow__current-line">
              <span className="terminal-workflow__prompt">$</span>
              <span className="terminal-workflow__command">{displayedCommand}</span>
              {isTyping && <span className="terminal-workflow__cursor" />}
            </div>

            {!isTyping && displayedCommand === WORKFLOW_STEPS[currentStep]?.command && (
              <div className="terminal-workflow__output terminal-workflow__output--reveal">
                {WORKFLOW_STEPS[currentStep].output}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
