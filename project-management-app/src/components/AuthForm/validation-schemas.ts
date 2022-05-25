import * as yup from 'yup';
import { MIN_PASSWORD_LENGTH, NAME_VALIDATOR } from '../../constants/common';

export const signInValidationSchema = yup.object({
  login: yup.string().required(),
  password: yup
    .string()
    .min(MIN_PASSWORD_LENGTH, `Must be at least ${MIN_PASSWORD_LENGTH} characters`)
    .required(),
});

export const signUpValidationSchema = signInValidationSchema.shape({
  name: yup.string().matches(NAME_VALIDATOR, 'Please, enter a valid name').required(),
});
