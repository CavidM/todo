import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import TodoEdit from './TodoEdit';
import { goTo } from '../../../../tools/Routing';

export default function TodoEditModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    goTo('/todos');
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TodoEdit />
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
