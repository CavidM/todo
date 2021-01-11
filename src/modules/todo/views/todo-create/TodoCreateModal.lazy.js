// import TodoCreateModal from './TodoCreateModal';
import { lazy, Suspense } from 'react';

export default function TodoCreateModalLazy() {
  const TodoCreateModal = lazy(() => import('./TodoCreateModal'));
  return (
    <Suspense fallback={<div>Loading form..</div>}>
      <TodoCreateModal />
    </Suspense>
  );
}
