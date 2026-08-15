import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './CTASection.css';

export default function CTASection() {
  const revealRef = useScrollReveal();
  const [os, setOs] = useState('Windows');

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes('win')) setOs('Windows');
    else if (userAgent.includes('mac')) setOs('macOS');
    else if (userAgent.includes('android')) setOs('Android');
    else if (userAgent.includes('iphone') || userAgent.includes('ipad')) setOs('iOS');
    else if (userAgent.includes('linux')) setOs('Linux');
  }, []);

  return (
    <section className="section section--xl home-cta" ref={revealRef}>
      <div className="container container--wide">
        <div className="home-cta__container reveal">
          {/* Subtle monochrome network/particle background using pure CSS gradients */}
          <div className="home-cta__bg" aria-hidden="true">
            <div className="home-cta__bg-grid" />
            <div className="home-cta__bg-glow" />
          </div>
          
          <div className="home-cta__content">
            <h2 className="home-cta__headline reveal reveal-delay-1">
              Download Craftly Workspace
            </h2>
            <div className="home-cta__actions reveal reveal-delay-2">
              {(os === 'Windows' || os === 'Linux' || os === 'Unknown OS') && (
                <>
                  <Link to="/download" className="home-cta__btn-primary">
                    Download for x64
                  </Link>
                  <Link to="/download" className="home-cta__btn-secondary">
                    Download for ARM64
                  </Link>
                </>
              )}
              {os === 'macOS' && (
                <>
                  <Link to="/download" className="home-cta__btn-primary">
                    Download for Apple Silicon
                  </Link>
                  <Link to="/download" className="home-cta__btn-secondary">
                    Download for Intel
                  </Link>
                </>
              )}
              {(os === 'Android' || os === 'iOS') && (
                <Link to="/download" className="home-cta__btn-primary">
                  Download
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
