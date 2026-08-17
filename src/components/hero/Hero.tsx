import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TechSnake from './TechSnake';
import './Hero.css';

function MonitorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  );
}

export default function Hero() {
  const [osName, setOsName] = useState('Windows');

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (/android/i.test(userAgent)) {
      setOsName("Android");
    } else if (/iphone|ipad|ipod/i.test(userAgent) || (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1)) {
      setOsName("iOS");
    } else if (userAgent.indexOf("mac") !== -1) {
      setOsName("macOS");
    } else if (userAgent.indexOf("linux") !== -1) {
      setOsName("Linux");
    }
  }, []);

  return (
    <section className="hero">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero__content">
          
          <TypewriterTitle />


          <div className="hero__cta-group">
            <Link to="/download" className="hero__btn-primary">
              <MonitorIcon />
              Download for {osName}
            </Link>
            <Link to="/use-cases" className="hero__btn-secondary">
              Explore use cases
            </Link>
          </div>

        </div>

        <div className="hero__media-wrapper">
          <img 
            src="/assets/Homepage_Picture/1.png" 
            alt="Craftly interface" 
            style={{ 
              width: '100%', 
              height: 'auto', 
              borderRadius: '8px', 
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              border: '1px solid rgba(0,0,0,0.05)'
            }} 
          />
        </div>

        <TechSnake />

        <TypewriterStatement text={`Craftly is building a new kind of\ntechnology organization, where\npeople, and intelligent agents work\ntogether.`} />

      </div>
    </section>
  );
}

function TypewriterTitle() {
  const text = "Hello World From Bangladesh ";
  const [displayedText, setDisplayedText] = useState('');
  const [showFlag, setShowFlag] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setShowFlag(true);
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-hero-display hero__title">
      {displayedText}
      {showFlag && (
        <img 
          src="/assets/Bangladesh_Flag/Flag-Bangladesh.webp" 
          alt="Bangladesh Flag" 
          style={{ 
            height: '0.8em', 
            width: 'auto', 
            display: 'inline-block', 
            verticalAlign: 'baseline', 
            marginLeft: '12px',
            borderRadius: '4px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            animation: 'fadeIn 0.5s ease-out'
          }} 
        />
      )}
      {!showFlag && <span className="typewriter-cursor"></span>}
    </h1>
  );
}

function TypewriterStatement({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    // Wait for the hero section animation to finish before starting typing
    const startTimeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 45); // Adjust typing speed here
      return () => clearInterval(interval);
    }, 800); // 800ms delay

    return () => clearTimeout(startTimeout);
  }, [text]);

  const lines = displayedText.split('\n');

  return (
    <div className="hero__statement">
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
      <span className="statement-cursor"></span>
    </div>
  );
}
