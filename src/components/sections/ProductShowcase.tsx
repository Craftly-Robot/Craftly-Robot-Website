import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import VideoShowcase from '../ui/VideoShowcase';
import './ProductShowcase.css';

interface ProductShowcaseProps {
  product: {
    name: string;
    tagline: string;
    description: string;
    capabilities: string[];
    route: string;
    videoSrc: string;
    posterSrc: string;
    icon?: string;
  };
  altLayout?: boolean;
}

function TypewriterDescription({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('');
  const [inView, setInView] = useState(false);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (descRef.current) {
      observer.observe(descRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [text, inView]);

  return (
    <p className="product-showcase__description" ref={descRef}>
      {displayedText}
      {displayedText.length < text.length && <span className="product-showcase__cursor"></span>}
    </p>
  );
}

export default function ProductShowcase({ product, altLayout = false }: ProductShowcaseProps) {
  return (
    <section className={`section section--xl product-showcase ${altLayout ? 'product-showcase--alt' : ''}`}>
      <div className="container container--wide">
        <div className="product-showcase__grid">
          {/* Text Left */}
          <div className="product-showcase__content reveal">
            <h2 className="product-showcase__title">
              {product.name}
            </h2>
            <TypewriterDescription text={product.description} />
            {/* The reference image doesn't show a CTA, but I'll keep the explore link just in case, or maybe not. I'll keep it. */}
            <div className="product-showcase__cta">
              <Link to={product.route} className="product-showcase__cta-link">
                Explore {product.name.split(' ')[1] || product.name}
              </Link>
            </div>
          </div>

          {/* Visual Right */}
          <div className="product-showcase__visual reveal reveal-delay-2">
            <VideoShowcase 
              src={product.videoSrc} 
              poster={product.posterSrc} 
              altText={`${product.name} video`} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
