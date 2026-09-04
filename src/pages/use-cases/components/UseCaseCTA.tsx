import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { useOS } from '../../../hooks/useOS';
import './UseCaseComponents.css';

interface UseCaseCTAProps {
  title?: string;
  primaryText?: string;
  primaryLink?: string;
  children?: ReactNode;
}

export function UseCaseCTA({ 
  title = "Start using Craftly Workspace",
  children
}: UseCaseCTAProps) {
  const revealRef = useScrollReveal();
  const os = useOS();

  return (
    <section className="ucc-cta reveal" ref={revealRef}>
      <div className="container">
        <h2 className="ucc-cta__headline">{title}</h2>
        <div className="ucc-cta__actions">
          {(os === 'Windows' || os === 'Linux' || os === 'Unknown') && (
            <>
              <Link to="/download" className="ucc-btn-primary">
                Download for x64
              </Link>
              <Link to="/download" className="ucc-btn-secondary">
                Download for ARM64
              </Link>
            </>
          )}
          {os === 'macOS' && (
            <>
              <Link to="/download" className="ucc-btn-primary">
                Download for Apple Silicon
              </Link>
              <Link to="/download" className="ucc-btn-secondary">
                Download for Intel
              </Link>
            </>
          )}
          {(os === 'Android' || os === 'iOS') && (
            <Link to="/download" className="ucc-btn-primary">
              Download
            </Link>
          )}
        </div>
        {children && (
          <div style={{ marginTop: 'var(--space-2xl)' }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
