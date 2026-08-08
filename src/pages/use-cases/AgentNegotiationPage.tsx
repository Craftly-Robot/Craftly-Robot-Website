import { useCases } from '../../data/useCases';
import UseCaseLayout from './UseCaseLayout';

const useCase = useCases.find((uc) => uc.id === 'agent-negotiation')!;

export default function AgentNegotiationPage() {
  return <UseCaseLayout useCase={useCase} />;
}
