import React from 'react';
import { useFormik } from 'formik';
import { AuthorizedUser, UnauthorizedUser } from '../../interfaces/user';
import {
  StyledButton,
  StyledButtonDelete,
  StyledContainer,
  StyledDangerBox,
  StyledForm,
  StyledInputContainer,
} from './styles';
import { useUserSelector } from '../../store/slices/user';
import validationSchema from './validationSchema';
import { signIn as checkPassword } from '../../utils/api';
import { URLS } from '../../constants/api';

function ProfileForm() {
  const user = useUserSelector() as AuthorizedUser;

  const initialValues = {
    name: user.name,
    login: user.login,
    password: '',
    repeatPassword: '',
    confirmPassword: '',
  };

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      alert(JSON.stringify(values));
      const { token } = await checkPassword<
        Pick<UnauthorizedUser, 'login' | 'password'>,
        Pick<AuthorizedUser, 'token'>
      >(URLS.signin, {
        login: values.login,
        password: values.confirmPassword,
      });
      alert(token);
      if (token) {
        alert('OK');
      } else {
        alert('BADLY');
      }
    },
  });

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit}>
        <h4>You can change the fields below</h4>
        <StyledInputContainer>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={values.name} onChange={handleChange} />
          {touched.name && errors.name ? <span>{errors.name}</span> : null}
        </StyledInputContainer>
        <StyledInputContainer>
          <label htmlFor="login">Login</label>
          <input id="login" name="login" value={values.login} onChange={handleChange} />
          {touched.login && errors.login ? <span>{errors.login}</span> : null}
        </StyledInputContainer>
        <p>If you don`t want to change password leave this fields empty</p>
        <StyledInputContainer>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
          />
          {touched.password && errors.password ? <span>{errors.password}</span> : null}
        </StyledInputContainer>
        <StyledInputContainer>
          <label htmlFor="repeatPassword">Repeat password</label>
          <input
            id="repeatPassword"
            name="repeatPassword"
            type="password"
            value={values.repeatPassword}
            onChange={handleChange}
          />
          {touched.repeatPassword && errors.repeatPassword ? (
            <span>{errors.repeatPassword}</span>
          ) : null}
        </StyledInputContainer>
        <p>Confirm changes with your current password</p>
        <StyledInputContainer>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {touched.confirmPassword && errors.confirmPassword ? (
            <span>{errors.confirmPassword}</span>
          ) : null}
        </StyledInputContainer>
        <StyledButton type="submit">Update form</StyledButton>
      </StyledForm>
      <StyledDangerBox>
        <p>
          Click the button if you want to remove your profile forever.
          <span> Be carefully.</span>
        </p>
        <StyledButtonDelete type="button">Delete profile</StyledButtonDelete>
      </StyledDangerBox>
    </StyledContainer>
  );
}

export default ProfileForm;
