import { Helmet } from 'react-helmet-async';
import CTASection from '../../components/sections/CTASection';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import type { UseCase } from '../../types';
import './UseCaseLayout.css';

interface UseCaseLayoutProps {
  useCase: UseCase;
}

export default function UseCaseLayout({ useCase }: UseCaseLayoutProps) {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <Helmet>
        <title>{useCase.title} — Craftly Use Cases</title>
        <meta name="description" content={useCase.concept} />
      </Helmet>

      <div className="container">
        <section className="use-case-hero">
          <div className="use-case-hero__label">
            <span className="use-case-hero__number">{useCase.number}</span>
            <span>Use Case</span>
          </div>
          <h1 className="text-display use-case-hero__title">{useCase.title}</h1>
          <p className="use-case-hero__concept">{useCase.concept}</p>
          <p className="use-case-hero__desc">{useCase.description}</p>
        </section>
      </div>

      <section className="use-case-areas">
        <div className="container">
          <div className="use-case-areas__header reveal">
            <h2 className="text-h2">Focus Areas</h2>
          </div>
          <div className="use-case-areas__grid">
            {useCase.areas.map((area, i) => (
              <div key={area} className={`area-card reveal reveal-delay-${(i % 4) + 1}`}>
                <h3 className="area-card__title">{area}</h3>
                <p className="area-card__desc">
                  Explore how Craftly brings intelligence and efficiency to {area.toLowerCase()}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
