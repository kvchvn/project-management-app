import * as yup from 'yup';
import { signUpValidationSchema } from '../AuthForm/validation-schemas';

const validationSchema = signUpValidationSchema.shape({
  repeatPassword: yup.string().oneOf([yup.ref('password'), null], 'Password should match!'),
  confirmPassword: yup.string().required('You must enter password'),
});

export default validationSchema;
