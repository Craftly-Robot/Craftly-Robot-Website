/* ── Product Type ── */
export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  route: string;
  videoSrc: string;
  posterSrc: string;
  capabilities: string[];
}

/* ── Use Case Type ── */
export interface UseCase {
  id: string;
  number: string;
  title: string;
  concept: string;
  description: string;
  areas: string[];
  route: string;
  icon: string;
}

/* ── Resource Type ── */
export interface Resource {
  id: string;
  title: string;
  description: string;
  route: string;
  icon: string;
  external?: boolean;
}

/* ── Download Type ── */
export interface Download {
  id: string;
  product: string;
  productId: string;
  description: string;
  version: string;
  platforms: Platform[];
  releaseDate: string;
  docsUrl: string;
}

export interface Platform {
  name: string;
  architecture: string;
  downloadUrl: string;
  size?: string;
}

/* ── Navigation Types ── */
export interface NavItem {
  label: string;
  route?: string;
  children?: NavDropdown;
}

export interface NavDropdown {
  type: 'products' | 'useCases' | 'resources';
  items: NavDropdownItem[];
}

export interface NavDropdownItem {
  title: string;
  description: string;
  icon: string;
  route: string;
}

/* ── Site Content ── */
export interface SiteContent {
  hero: {
    badge: string;
    headline: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  intro: {
    label: string;
    headline: string;
    description: string;
  };
  architecture: {
    label: string;
    headline: string;
    description: string;
    layers: ArchitectureLayer[];
  };
  cta: {
    headline: string;
    description: string;
    buttonText: string;
  };
  footer: {
    tagline: string;
    copyright: string;
  };
}

export interface ArchitectureLayer {
  label: string;
  description: string;
}
