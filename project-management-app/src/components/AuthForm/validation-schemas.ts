import { TFunction } from 'i18next';
import * as yup from 'yup';
import { MIN_PASSWORD_LENGTH, NAME_VALIDATOR } from '../../constants/common';

export const getSignInValidationSchema = (t: TFunction) =>
  yup.object({
    login: yup.string().required(t('authPage.errors.required')),
    password: yup
      .string()
      .min(
        MIN_PASSWORD_LENGTH,
        `${t('authPage.errors.password.part1')} ${MIN_PASSWORD_LENGTH} ${t(
          'authPage.errors.password.part2'
        )}`
      )
      .required(t('authPage.errors.required')),
  });

export const getSignUpValidationSchema = (t: TFunction) =>
  getSignInValidationSchema(t).shape({
    name: yup
      .string()
      .matches(NAME_VALIDATOR, t('authPage.errors.name'))
      .required(t('authPage.errors.required')),
  });
