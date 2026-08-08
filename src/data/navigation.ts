import { products } from './products';
import { useCases } from './useCases';
import { resources } from './resources';
import type { NavDropdownItem } from '../types';

export interface NavConfig {
  label: string;
  route?: string;
  dropdownType?: 'products' | 'useCases' | 'resources';
  items?: NavDropdownItem[];
}

export const navigation: NavConfig[] = [
  {
    label: 'Products',
    dropdownType: 'products',
    items: products.map((p) => ({
      title: p.name,
      description: p.tagline,
      icon: p.icon,
      route: p.route,
    })),
  },
  {
    label: 'Use Cases',
    dropdownType: 'useCases',
    items: useCases.map((uc) => ({
      title: uc.title,
      description: uc.concept,
      icon: uc.icon,
      route: uc.route,
    })),
  },
  {
    label: 'Resources',
    dropdownType: 'resources',
    items: resources.map((r) => ({
      title: r.title,
      description: r.description,
      icon: r.icon,
      route: r.route,
    })),
  },
];
