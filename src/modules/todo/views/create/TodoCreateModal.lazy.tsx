import loadable from '@loadable/component';

export default function TodoCreateModalLazy() {
  const TodoCreateModal = loadable(
    () => {
      return import('./TodoCreateModal');
    },
    {
      fallback: <div>Loading form....</div>
    }
  );
  return <TodoCreateModal />;
}
