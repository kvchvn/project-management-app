import * as yup from 'yup';

export const taskValidationSchema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
});
