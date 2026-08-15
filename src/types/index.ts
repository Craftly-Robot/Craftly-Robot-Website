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

export interface Resource {
  id: string;
  title: string;
  description: string;
  route: string;
  icon: string;
  external?: boolean;
}

export interface NavDropdownItem {
  title: string;
  description: string;
  icon: string;
  route: string;
}

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
