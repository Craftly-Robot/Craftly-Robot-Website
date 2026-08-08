import { resources } from '../../data/resources';
import ResourceLayout from './ResourceLayout';

const resource = resources.find((r) => r.id === 'blog')!;

export default function BlogPage() {
  return <ResourceLayout resource={resource} />;
}
