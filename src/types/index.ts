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
