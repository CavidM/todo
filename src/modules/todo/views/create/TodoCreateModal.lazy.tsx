import loadable from '@loadable/component';

export default function TodoCreateModalLazy() {
  const TodoCreateModal = loadable(
    () => import('./TodoCreateModal'),
    {
      fallback: <div>Loading form....</div>
    }
  );
  return <TodoCreateModal />;
}
