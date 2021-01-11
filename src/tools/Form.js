import React, { useState } from 'react';

const createErrorObject = (errors) => {
  return errors.details.reduce(
    (newErrorObject, errorItem) => {
      return {
        ...newErrorObject,
        [errorItem.context.key]: errorItem
      };
    },
    {}
  )
}

export default function useFormData(
  data,
  formSchema
) {
  const [formData, setFormData] = useState(data || {});
  const [errors, setFormErrors] = useState(true);
  const [wasValidated, setWasValidated] = useState(false);

  const validateFn = (newFormData = formData) => {

    const validation = formSchema.validate(newFormData, {
      abortEarly: false
    });

    setWasValidated(true);

    if (validation.error) {

      const errors = createErrorObject(validation.error)

      setFormErrors(errors);

      return errors;
    }

    setFormErrors(false);

    return false;
  };

  const validate = React.useCallback(validateFn, [formData]);

  const addData = (field, value) => {
    const newState = {
      ...formData,
      [field]: value
    };

    setFormData(newState);

    if(wasValidated) {
      validate(newState);
    }
  };

  return [formData, addData, validate, errors];
}
