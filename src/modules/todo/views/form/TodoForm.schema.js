import Joi from 'joi';

export default function TodoFormSchema() {
  return Joi.object({
    id: Joi.any(),
    title: Joi.string().min(3).required(),
    description: Joi.string().required()
  });
}
