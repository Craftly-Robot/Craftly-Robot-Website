import { resources } from '../../data/resources';
import ResourceLayout from './ResourceLayout';

const resource = resources.find((r) => r.id === 'documentation')!;

export default function DocumentationPage() {
  return <ResourceLayout resource={resource} />;
}
