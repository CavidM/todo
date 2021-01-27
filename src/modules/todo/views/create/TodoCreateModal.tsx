import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import TodoCreate from './TodoCreate';

export default function TodoCreateModal() {
  const history = useHistory();

  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    history.push('/todos');
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TodoCreate />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
