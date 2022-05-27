import * as yup from 'yup';
import { MIN_PASSWORD_LENGTH } from '../../constants/common-constants';
import { signUpValidationSchema } from '../AuthForm/validation-schemas';

const validationSchema = signUpValidationSchema.shape({
  password: yup
    .string()
    .min(MIN_PASSWORD_LENGTH, `Must be at least ${MIN_PASSWORD_LENGTH} characters`),
  repeatedPassword: yup.string(),
  confirmationPassword: yup.string().required('You must enter password'),
});

export default validationSchema;
