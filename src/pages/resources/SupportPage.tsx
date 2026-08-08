import { resources } from '../../data/resources';
import ResourceLayout from './ResourceLayout';

const resource = resources.find((r) => r.id === 'support')!;

export default function SupportPage() {
  return <ResourceLayout resource={resource} />;
}
