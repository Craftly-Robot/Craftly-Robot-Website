import type { ReactNode } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import './UseCaseComponents.css';

interface FeatureSectionProps {
  title: ReactNode;
  description: ReactNode;
  visual?: ReactNode;
  layout?: 'text-left' | 'text-right' | 'full-width';
  alignTop?: boolean;
}

export function FeatureSection({ title, description, visual, layout = 'text-left', alignTop = false }: FeatureSectionProps) {
  const revealRef = useScrollReveal();
  
  const innerClass = `ucc-feature__inner ucc-feature__inner--${layout}`;

  return (
    <section className="ucc-feature reveal" ref={revealRef}>
      <div className="container">
        <div className={innerClass} style={alignTop ? { alignItems: 'flex-start' } : {}}>
          <div className="ucc-feature__content">
            <h2 className="ucc-feature__title">{title}</h2>
            <div className="ucc-feature__desc">{description}</div>
          </div>
          {visual && (
            <div className="ucc-feature__visual">
              {visual}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
