import loadable from '@loadable/component';
// import TodoCreateModal from './TodoCreateModal';
// import { lazy, Suspense } from 'react';

export default function TodoCreateModalLazy() {
  const TodoCreateModal = loadable(
    () =>
      import(
        /* webpackChunkName: "TodoCreateModal" */ './TodoCreateModal'
      ),
    {
      fallback: <div>Loading form....</div>
    }
  );
  return (
    // <Suspense fallback={}>
    <TodoCreateModal />
    // </Suspense>
  );
}
