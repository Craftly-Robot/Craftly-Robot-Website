import type { ReactNode } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import './UseCaseComponents.css';

interface Step {
  label: string;
  content: ReactNode;
}

interface ExampleScenarioProps {
  title: string;
  steps: Step[];
}

export function ExampleScenario({ title, steps }: ExampleScenarioProps) {
  const revealRef = useScrollReveal();

  return (
    <div className="ucc-scenario reveal" ref={revealRef}>
      <div className="ucc-scenario__header">
        <h3 className="ucc-scenario__title">{title}</h3>
      </div>
      <div className="ucc-scenario__flow">
        {steps.map((step, idx) => (
          <div key={idx} className="ucc-scenario__step">
            <div className="ucc-scenario__step-label">{step.label}</div>
            <div className="ucc-scenario__step-content">{step.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
