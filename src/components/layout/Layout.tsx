import { type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isDocumentationPage = location.pathname.startsWith('/resources/documentation');

  return (
    <div className="layout">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main className="layout__main" id="main-content">
        {children}
      </main>
      {!isDocumentationPage && <Footer />}
    </div>
  );
}
