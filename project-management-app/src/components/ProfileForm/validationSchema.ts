import * as yup from 'yup';
import { signUpValidationSchema } from '../AuthForm/validation-schemas';

const validationSchema = signUpValidationSchema.pick(['name', 'login']);

export default validationSchema;
