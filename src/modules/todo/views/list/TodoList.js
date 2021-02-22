import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { deleteTodo } from '../../todo.slices';
import TodoListHtml from './TodoList.html';

function TodoList() {
  (async function () {
    const props = ['name', 'email', 'tel', 'address', 'icon'];
    const opts = { multiple: true };

    const supported =
      'contacts' in navigator && 'ContactsManager' in window;

    console.log({ supported });
    console.log(navigator.contacts);

    try {
      const contacts = await navigator.contacts.select(props, opts);
      console.log(contacts);
    } catch (ex) {
      console.log(ex);
    }
  })();

  const todos = useSelector((state) => state.todos.items);
  console.log('todo list');
  const dispatch = useDispatch();
  const history = useHistory();

  const onDeleteTodo = (todo) => {
    dispatch({
      type: 'DELETE_TODO',
      payload: todo
    });
  };

  const onEditTodo = (todo) => {
    history.push(`/todos/${todo.id}/edit`);
  };

  return (
    <TodoListHtml
      todos={todos}
      deleteTodo={onDeleteTodo}
      editTodo={onEditTodo}
    />
  );
}

export default TodoList;
