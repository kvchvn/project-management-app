import * as yup from 'yup';
import { signUpValidationSchema } from '../AuthForm/validation-schemas';

const validationSchema = signUpValidationSchema.shape({
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Password should match!'),
  currentPassword: yup.string().required(),
});

export default validationSchema;
