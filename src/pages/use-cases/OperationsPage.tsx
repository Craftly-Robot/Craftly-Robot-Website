import { useCases } from '../../data/useCases';
import UseCaseLayout from './UseCaseLayout';

const useCase = useCases.find((uc) => uc.id === 'operations')!;

export default function OperationsPage() {
  return <UseCaseLayout useCase={useCase} />;
}
