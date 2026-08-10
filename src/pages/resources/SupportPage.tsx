import { Helmet } from 'react-helmet-async';
import './SupportPage.css';

export default function SupportPage() {
  return (
    <>
      <Helmet>
        <title>Support — Craftly</title>
        <meta name="description" content="Find answers in our docs or go to our community." />
      </Helmet>

      <div className="support-page">
        <div className="support-hero">
          <h1 className="support-hero__title">
            Find answers in our docs<br />or go to our community
          </h1>
          <a href="/docs" className="support-hero__btn">
            View docs
          </a>
        </div>

        <div className="support-cards container">
          {/* X (Twitter) Card */}
          <a href="https://x.com/Craftly_robot" target="_blank" rel="noopener noreferrer" className="support-card">
            <div className="support-card__icon">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </div>
            <div className="support-card__content">
              <h3 className="support-card__title">X</h3>
              <p className="support-card__desc">Join the conversation</p>
            </div>
            <div className="support-card__footer">
              <span className="support-card__link">Visit &gt;</span>
            </div>
          </a>

          {/* Facebook Card */}
          <a href="https://www.facebook.com/peopleofcraftly" target="_blank" rel="noopener noreferrer" className="support-card">
            <div className="support-card__icon">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <div className="support-card__content">
              <h3 className="support-card__title">Facebook</h3>
              <p className="support-card__desc">Connect with us</p>
            </div>
            <div className="support-card__footer">
              <span className="support-card__link">Visit &gt;</span>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a href="https://www.linkedin.com/company/craftlyapp/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="support-card">
            <div className="support-card__icon">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div className="support-card__content">
              <h3 className="support-card__title">LinkedIn</h3>
              <p className="support-card__desc">Stay updated</p>
            </div>
            <div className="support-card__footer">
              <span className="support-card__link">Visit &gt;</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
