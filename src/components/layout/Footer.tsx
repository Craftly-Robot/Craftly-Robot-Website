import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__top">
        <div className="footer__top-left">
          <h2 className="footer__heading">Experience liftoff</h2>
        </div>
        
        <div className="footer__top-right">
          <div className="footer__column">
            <h3 className="footer__column-title">Product</h3>
            <Link to="/download" className="footer__link">Download</Link>
            <Link to="/products/workspace" className="footer__link">Product</Link>
            <Link to="/resources/documentation" className="footer__link">Docs</Link>
            <Link to="/resources/changelog" className="footer__link">Changelog</Link>
            <Link to="/resources/press" className="footer__link">Press</Link>
            <Link to="/resources/releases" className="footer__link">Releases</Link>
          </div>
          
          <div className="footer__column">
            <h3 className="footer__column-title">Resources</h3>
            <Link to="/resources/blog" className="footer__link">Blog</Link>
            <Link to="/pricing" className="footer__link">Pricing</Link>
            <Link to="/use-cases/operations" className="footer__link">Use Cases</Link>
          </div>
        </div>
      </div>

      <div className="footer__middle">
        <div className="footer__huge-text">
          Craftly
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-left">
          <Link to="/" className="footer__bottom-logo">
            Craftly Robot
          </Link>
        </div>
        <div className="footer__bottom-right">
          <Link to="/about" className="footer__bottom-link">About Craftly</Link>
          <Link to="/products" className="footer__bottom-link">Craftly Products</Link>
          <Link to="/privacy" className="footer__bottom-link">Privacy</Link>
          <Link to="/terms" className="footer__bottom-link">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
