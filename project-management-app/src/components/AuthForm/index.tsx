import React from 'react';
import { FormikConfig } from 'formik';

import { useForm } from '../../hooks';
import { UnauthorizedUser } from '../../interfaces/user';
import { signInValidationSchema, signUpValidationSchema } from './validation-schemas';

import { StyledForm, StyledInputContainer } from './styles';
import { toast, ToastContainer } from 'react-toastify';
import { MIN_PASSWORD_LENGTH } from '../../constants/common-constants';
import 'react-toastify/dist/ReactToastify.css';

function AuthForm({
  isSignUpForm,
  onSubmit,
}: { isSignUpForm: boolean } & Pick<FormikConfig<UnauthorizedUser>, 'onSubmit'>) {
  const initialValues = {
    name: '',
    login: '',
    password: '',
  };
  
  const { handleSubmit, handleChange, values, errors, isValid } = useForm({
    initialValues,
    validationSchema: isSignUpForm ? signUpValidationSchema : signInValidationSchema,
    onSubmit,
  });

  return (
    <StyledForm onSubmit={handleSubmit}>
                <ToastContainer
        limit={1}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {isSignUpForm && (
        <StyledInputContainer>
          <input id="name" onChange={handleChange} value={values.name} placeholder=" " />
          <label htmlFor="name">Name</label>
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
        <label htmlFor="login">Login</label>
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
        <label htmlFor="password">Password</label>
        {errors.password && <span>{errors.password}</span> && toast.error(`Must be at least ${MIN_PASSWORD_LENGTH} characters`, {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
})}
      </StyledInputContainer>
      <button type="submit" disabled={!isValid}>
        {isSignUpForm ? 'Sign up' : 'Sign in'}
      </button>
    </StyledForm>
  );
}

export default AuthForm;
