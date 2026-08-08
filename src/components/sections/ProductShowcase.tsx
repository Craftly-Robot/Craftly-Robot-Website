import { Link } from 'react-router-dom';
import VideoShowcase from '../ui/VideoShowcase';

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

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export default function ProductShowcase({ product, altLayout = false }: ProductShowcaseProps) {
  return (
    <section className={`section section--lg product-showcase ${altLayout ? 'product-showcase--alt' : ''}`}>
      <div className="container">
        <div className={`product-showcase__grid ${altLayout ? 'product-showcase__grid--reverse' : ''}`}>
          <div className="product-showcase__content">
            <span className="text-label product-showcase__label reveal">
              <span style={{ color: 'var(--color-accent)' }}>{product.icon || '⬡'}</span>
              {product.name}
            </span>
            <h2 className="text-h2 product-showcase__title reveal reveal-delay-1">
              {product.tagline}
            </h2>
            <p className="product-showcase__description reveal reveal-delay-2">
              {product.description}
            </p>
            <div className="product-showcase__capabilities reveal reveal-delay-3">
              {product.capabilities.map((cap) => (
                <span key={cap} className="product-showcase__capability">{cap}</span>
              ))}
            </div>
            <div className="product-showcase__cta reveal reveal-delay-4">
              <Link to={product.route} className="product-showcase__cta-link">
                Learn more
                <ArrowRight className="product-showcase__cta-arrow" />
              </Link>
            </div>
          </div>
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
