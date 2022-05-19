import React from 'react';
import { useFormik } from 'formik';
import { AuthorizedUser } from '../../interfaces/user';
import validationSchema from './validationSchema';
import { StyledForm, StyledInputContainer } from './styles';
import { useUserSelector } from '../../store/slices/user';

function ProfileForm() {
  const user = useUserSelector();
  const defaultUser: AuthorizedUser = {
    id: '',
    name: '',
    login: '',
    token: '',
  };

  const initialValues = user || defaultUser;
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => alert(values.name + '__' + values.login + '__' + values.password),
  });

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInputContainer>
        <input id="name" name="name" value={values.name} onChange={handleChange} placeholder=" " />
        <label htmlFor="name">Name</label>
        {errors ? <span>{errors.name}</span> : null}
      </StyledInputContainer>
      <StyledInputContainer>
        <input
          id="login"
          name="login"
          value={values.login}
          onChange={handleChange}
          placeholder=" "
        />
        <label htmlFor="login">Login</label>
        {errors ? <span>{errors.login}</span> : null}
      </StyledInputContainer>
      <StyledInputContainer>
        <input
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder=" "
        />
        <label htmlFor="password">Password</label>
        {errors ? <span>{errors.password}</span> : null}
      </StyledInputContainer>
      <button type="submit">Update form</button>
    </StyledForm>
  );
}

export default ProfileForm;
