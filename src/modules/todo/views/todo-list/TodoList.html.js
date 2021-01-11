import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';
import { VscEdit } from 'react-icons/vsc';

export default function TodoListHtml({
  todos,
  deleteTodo,
  editTodo
}) {
  const todosComponent = todos.map((todo, index) => (
    <tr key={todo.id}>
      <td>{++index}</td>
      <td>{todo.title}</td>
      <td>{todo.description}</td>
      <td>
        <Button
          variant="outline-info"
          className="button-edit mr-2"
          onClick={() => editTodo(todo)}
        >
          <VscEdit />
        </Button>
        <Button
          variant="outline-danger"
          className="button-delete ml-2"
          onClick={() => deleteTodo(todo)}
        >
          <AiFillDelete />
        </Button>
      </td>
    </tr>
  ));

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{todosComponent}</tbody>
    </Table>
  );
}

TodoListHtml.propTypes = {
  todos: PropTypes.array.isRequired
};
