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


export default function ProductShowcase({ product, altLayout = false }: ProductShowcaseProps) {
  return (
    <section className={`section section--xl product-showcase ${altLayout ? 'product-showcase--alt' : ''}`}>
      <div className="container container--wide">
        <div className="product-showcase__stack">
          {altLayout ? (
            <>
              {/* Media First (e.g. Robot) */}
              <div className="product-showcase__visual reveal">
                <VideoShowcase 
                  src={product.videoSrc} 
                  poster={product.posterSrc} 
                  altText={`${product.name} video`} 
                />
              </div>
              <div className="product-showcase__content product-showcase__content--bottom reveal reveal-delay-2">
                <span className="text-label product-showcase__label">
                  <span>{product.icon || '◈'}</span>
                  {product.name}
                </span>
                <h2 className="text-display product-showcase__title">
                  {product.tagline}
                </h2>
                <p className="product-showcase__description">
                  {product.description}
                </p>
                <div className="product-showcase__cta">
                  <Link to={product.route} className="product-showcase__cta-link">
                    Explore {product.name.split(' ')[1] || product.name}
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Text First (e.g. Workspace) */}
              <div className="product-showcase__content product-showcase__content--top reveal">
                <span className="text-label product-showcase__label">
                  <span>{product.icon || '⬡'}</span>
                  {product.name}
                </span>
                <h2 className="text-display product-showcase__title">
                  {product.tagline}
                </h2>
                <p className="product-showcase__description">
                  {product.description}
                </p>
                <div className="product-showcase__cta">
                  <Link to={product.route} className="product-showcase__cta-link">
                    Explore {product.name.split(' ')[1] || product.name}
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
            </>
          )}
        </div>
      </div>
    </section>
  );
}
