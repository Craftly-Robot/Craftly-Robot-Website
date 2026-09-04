import { Link } from "react-router-dom";
import VideoShowcase from "../ui/VideoShowcase";
import "./ProductShowcase.css";

interface ProductShowcaseProps {
  product: {
    id?: string;
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
  deviceType?: "desktop" | "mobile";
}

export default function ProductShowcase({
  product,
  altLayout = false,
  deviceType,
}: ProductShowcaseProps) {
  const isMobile = deviceType === "mobile" || product.id === "robot";

  return (
    <section
      className={`section section--xl product-showcase ${altLayout ? "product-showcase--alt" : ""}`}
    >
      <div className="container container--wide">
        <div className="product-showcase__grid">
          {/* Text Left */}
          <div className="product-showcase__content reveal">
            <h2 className="product-showcase__title">{product.name}</h2>
            <p className="product-showcase__description">
              {product.description}
            </p>
            <div className="product-showcase__cta">
              <Link to={product.route} className="product-showcase__cta-link">
                Explore {product.name.split(" ")[1] || product.name}
              </Link>
            </div>
          </div>

          {/* Visual Right */}
          <div
            className={`product-showcase__visual product-showcase__visual--${isMobile ? "mobile" : "desktop"} reveal reveal-delay-2`}
          >
            {isMobile ? (
              <div className="product-showcase__phone-canvas">
                <div className="product-showcase__phone-chassis">
                  <div className="product-showcase__phone-notch">
                    <span className="product-showcase__phone-camera" />
                  </div>
                  <div className="product-showcase__phone-screen">
                    <VideoShowcase
                      src={product.videoSrc}
                      poster={product.posterSrc}
                      altText={`${product.name} interface`}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="product-showcase__window">
                <div className="product-showcase__window-header">
                  <div className="product-showcase__window-dots">
                    <span className="product-showcase__dot product-showcase__dot--red" />
                    <span className="product-showcase__dot product-showcase__dot--yellow" />
                    <span className="product-showcase__dot product-showcase__dot--green" />
                  </div>
                  <div className="product-showcase__window-title">
                    Craftly Workspace
                  </div>
                  <div className="product-showcase__window-spacer" />
                </div>
                <div className="product-showcase__window-body">
                  <VideoShowcase
                    src={product.videoSrc}
                    poster={product.posterSrc}
                    altText={`${product.name} interface`}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
