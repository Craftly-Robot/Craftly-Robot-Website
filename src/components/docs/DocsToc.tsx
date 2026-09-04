import { useState, useEffect } from 'react';

interface DocsTocProps {
  tocItems: { id: string; label: string }[];
}

export default function DocsToc({ tocItems }: DocsTocProps) {
  const [activeId, setActiveId] = useState<string>('welcome');

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: '-10% 0px -70% 0px',
    });

    const sections = document.querySelectorAll('h1[id], h2[id], h3[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!tocItems || tocItems.length === 0) return;
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
        setActiveId(tocItems[tocItems.length - 1].id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems]);

  useEffect(() => {
    if (activeId) {
      const activeElement = document.getElementById(`toc-${activeId}`);
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: 'auto', block: 'nearest' });
      }
    }
  }, [activeId]);

  if (tocItems.length === 0) return null;

  return (
    <aside className="docs__sidebar docs__sidebar--right">
      <div className="docs__toc">
        <h4 className="docs__toc-title">On this Page</h4>
        <ul className="docs__toc-list">
          {tocItems.map((item) => (
            <li key={item.id} id={`toc-${item.id}`} className={`docs__toc-item ${activeId === item.id ? 'docs__toc-item--active' : ''}`}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
