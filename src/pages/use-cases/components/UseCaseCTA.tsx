import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import './UseCaseComponents.css';

interface UseCaseCTAProps {
  title?: string;
  primaryText?: string;
  primaryLink?: string;
}

export function UseCaseCTA({ 
  title = "Start using Craftly Workspace", 
  primaryText = "Download", 
  primaryLink = "/download" 
}: UseCaseCTAProps) {
  const revealRef = useScrollReveal();

  return (
    <section className="ucc-cta reveal" ref={revealRef}>
      <div className="container">
        <h2 className="ucc-cta__headline">{title}</h2>
        <Link to={primaryLink} className="ucc-btn-primary">
          {primaryText}
        </Link>
      </div>
    </section>
  );
}
