import { useCases } from '../../data/useCases';
import UseCaseLayout from './UseCaseLayout';

const useCase = useCases.find((uc) => uc.id === 'ai')!;

export default function AIPage() {
  return <UseCaseLayout useCase={useCase} />;
}
