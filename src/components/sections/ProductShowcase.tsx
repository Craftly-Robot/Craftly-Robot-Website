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
        <div className="product-showcase__grid">
          {/* Text Left */}
          <div className="product-showcase__content reveal">
            <h2 className="product-showcase__title">
              {product.name}
            </h2>
            <p className="product-showcase__description">
              {product.description}
            </p>
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
