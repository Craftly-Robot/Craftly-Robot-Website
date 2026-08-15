import type { ReactNode } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import './UseCaseComponents.css';

interface UseCaseHeroProps {
  title: ReactNode;
  description: ReactNode;
  primaryCta?: ReactNode;
  secondaryCta?: ReactNode;
}

export function UseCaseHero({ title, description, primaryCta, secondaryCta }: UseCaseHeroProps) {
  const revealRef = useScrollReveal();

  return (
    <section className="ucc-hero reveal" ref={revealRef}>
      <div className="container">
        <h1 className="ucc-hero__title">{title}</h1>
        <div className="ucc-hero__desc">{description}</div>
        {(primaryCta || secondaryCta) && (
          <div className="ucc-hero__actions">
            {primaryCta}
            {secondaryCta}
          </div>
        )}
      </div>
    </section>
  );
}
