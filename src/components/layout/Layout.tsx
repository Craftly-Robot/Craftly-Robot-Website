import { type ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout__main" id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
