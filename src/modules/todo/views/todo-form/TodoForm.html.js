import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function TodoFormHtml({ onSubmit, errors, onChange, formData }) {
  // console.log(errors);

  return (
    <Form noValidate onSubmit={onSubmit} onChange={onChange}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter item title"
          name="title"
          isInvalid={errors?.title}
          defaultValue={formData.title}
        />
        <Form.Control.Feedback type="invalid">
          {errors?.title?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter item description"
          name="description"
          isInvalid={errors?.description}
          defaultValue={formData.description}
        />
        <Form.Control.Feedback type="invalid">
          {errors?.description?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

TodoFormHtml.propTypes = {
  //   register: PropTypes.func.isRequired,
  //   handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  //   errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
  //   onError: PropTypes.func.isRequired
};

export default TodoFormHtml;
