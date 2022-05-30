import { TFunction } from 'react-i18next';
import * as yup from 'yup';
import { MIN_PASSWORD_LENGTH } from '../../constants/common';
import { getSignUpValidationSchema } from '../AuthForm/validation-schemas';

const getProfileFormValidationSchema = (t: TFunction) => {
  const signUpValidationSchema = getSignUpValidationSchema(t);

  signUpValidationSchema.shape({
    password: yup
      .string()
      .min(
        MIN_PASSWORD_LENGTH,
        `${t('profilePage.errors.min.part1')} ${MIN_PASSWORD_LENGTH} ${t(
          'profilePage.errors.min.part2'
        )}`
      ),
    repeatedPassword: yup.string(),
    confirmationPassword: yup.string().required(t('profilePage.errors.confirmationPassword')),
  });
};

export default getProfileFormValidationSchema;
