import React from 'react';
import { useFormik } from 'formik';
import { AuthorizedUser, EditableUserData, UnauthorizedUser } from '../../interfaces/user';
import { onSignIn, useUserSelector } from '../../store/slices/user';
import validationSchema from './validationSchema';
import { checkPassword } from '../../utils/users-api';
import { updateUser } from '../../utils/users-api';
import { setToLocalStorage } from '../../utils/common';
import { useDispatch } from 'react-redux';
import {
  StyledButton,
  StyledButtonDelete,
  StyledContainer,
  StyledDangerBox,
  StyledForm,
  StyledInputContainer,
} from './styles';

function ProfileForm() {
  const user = useUserSelector() as AuthorizedUser;
  const dispatch = useDispatch();
  const initialValues: EditableUserData = {
    name: user.name,
    login: user.login,
    password: '',
    repeatedPassword: '',
    confirmationPassword: '',
  };

  const { handleSubmit, handleChange, values, errors, touched, resetForm, setFieldError } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values) => {
        alert(JSON.stringify(values));
        const { token } = await checkPassword({
          login: user.login,
          password: values.confirmationPassword,
        });
        alert(token);
        if (token) {
          const newUserData: UnauthorizedUser = {
            name: values.name,
            login: values.login,
            password: values.password || values.confirmationPassword,
          };
          const { id, name, login } = await updateUser(user.id, newUserData);
          const updatedUserData: AuthorizedUser = {
            id,
            name,
            login,
            token,
          };
          setToLocalStorage('user', updatedUserData);
          dispatch(onSignIn(updatedUserData));
          resetForm({
            values: {
              name,
              login,
              password: '',
              repeatedPassword: '',
              confirmationPassword: '',
            },
          });
        } else {
          alert('BADLY');
          setFieldError('confirmationPassword', 'Wrong password!');
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
            id="repeatedPassword"
            name="repeatedPassword"
            type="password"
            value={values.repeatedPassword}
            onChange={handleChange}
          />
          {touched.repeatedPassword && errors.repeatedPassword ? (
            <span>{errors.repeatedPassword}</span>
          ) : null}
        </StyledInputContainer>
        <p>Confirm changes with your current password</p>
        <StyledInputContainer>
          <input
            id="confirmationPassword"
            name="confirmationPassword"
            type="password"
            value={values.confirmationPassword}
            onChange={handleChange}
          />
          {touched.confirmationPassword && errors.confirmationPassword ? (
            <span>{errors.confirmationPassword}</span>
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
