import { resources } from '../../data/resources';
import ResourceLayout from './ResourceLayout';

const resource = resources.find((r) => r.id === 'releases')!;

export default function ReleasesPage() {
  return <ResourceLayout resource={resource} />;
}
