import React from 'react';
import { FormikConfig } from 'formik';
import { useForm } from '../../hooks';
import { UnauthorizedUser } from '../../interfaces/user';
import { signInValidationSchema, signUpValidationSchema } from './validation-schemas';
import { StyledForm, StyledInputContainer } from './styles';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

function AuthForm({
  isSignUpForm,
  onSubmit,
}: { isSignUpForm: boolean } & Pick<FormikConfig<UnauthorizedUser>, 'onSubmit'>) {
  const initialValues = {
    name: '',
    login: '',
    password: '',
  };
  const { t } = useTranslation();

  const { handleSubmit, handleChange, values, errors, isValid } = useForm({
    initialValues,
    validationSchema: isSignUpForm ? signUpValidationSchema : signInValidationSchema,
    onSubmit,
  });

  return (
    <StyledForm onSubmit={handleSubmit}>
      {isSignUpForm && (
        <StyledInputContainer>
          <input id="name" onChange={handleChange} value={values.name} placeholder=" " />
          <label htmlFor="name">{t('authForm.name')}</label>
          {errors.name && <span>{errors.name}</span>}
        </StyledInputContainer>
      )}
      <StyledInputContainer>
        <input
          id="login"
          name="login"
          onChange={handleChange}
          value={values.login}
          placeholder=" "
        />
        <label htmlFor="login">{t('authForm.login')}</label>
        {errors.login && <span>{errors.login}</span>}
      </StyledInputContainer>
      <StyledInputContainer>
        <input
          id="password"
          name="password"
          onChange={handleChange}
          value={values.password}
          placeholder=" "
          type="password"
        />
        <label htmlFor="password">{t('authForm.password')}</label>
        {errors.password && <span>{errors.password}</span>}
      </StyledInputContainer>
      <button type="submit" disabled={!isValid}>
        {isSignUpForm ? t('authPage.signUp') : t('authPage.signIn')}
      </button>
    </StyledForm>
  );
}

export default AuthForm;
