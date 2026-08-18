import { useEffect } from 'react';
import { Lottie } from 'lottie-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import animationData from '../../public/assets/animations/404.json';
import './NotFoundPage.css';

export default function NotFoundPage() {
  useEffect(() => {
    document.body.classList.add('hide-footer');
    return () => {
      document.body.classList.remove('hide-footer');
    };
  }, []);

  return (
    <div className="not-found-page">
      <div className="not-found-header">
        <Link to="/" className="not-found-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Craftly
        </Link>
      </div>
      <SEO 
        title="Page Not Found" 
        description="The page you are looking for does not exist." 
      />
      <div className="not-found-content">
        <div className="not-found-animation">
          <Lottie src={animationData} loop={true} autoplay={true} />
        </div>
        <h1 className="not-found-title">Page not found</h1>
        <p className="not-found-text">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="not-found-btn">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
