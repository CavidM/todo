import useFormData from '../../../../tools/Form';
import TodoFormHtml from './TodoForm.html.tsx';
import TodoFormSchema from './TodoForm.schema';

export default function TodoForm({ submitForm, todo = null }) {
  //   const { register, handleSubmit, errors } = useForm();

  const [formData, addData, validate, errors] = useFormData(
    todo,
    TodoFormSchema()
  );

  const onSubmit = (event) => {
    event.preventDefault();
    event.preventDefault();

    const validationErrors = validate();

    if (!validationErrors) {
      console.log(formData);
      submitForm(formData);
    }
  };

  const onChange = (e) => {
    addData(e.target.name, e.target.value);
  };

  return TodoFormHtml(onSubmit, errors, onChange, formData);

  return (
    <TodoFormHtml
      onSubmit={onSubmit}
      errors={errors}
      onChange={onChange}
      formData={formData}
    />
  );
}
