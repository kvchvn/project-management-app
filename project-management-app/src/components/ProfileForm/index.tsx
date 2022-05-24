import React from 'react';
import { useFormik } from 'formik';
import { AuthorizedUser, EditableUserData, UnauthorizedUser } from '../../interfaces/user';
import { onSignIn, useUserSelector } from '../../store/slices/user';
import validationSchema from './validationSchema';
import { checkPassword, removeUser } from '../../utils/users-api';
import { updateUser } from '../../utils/users-api';
import { setToLocalStorage } from '../../utils/common';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues: EditableUserData = {
    name: user ? user.name : '',
    login: user ? user.login : '',
    password: '',
    repeatedPassword: '',
    confirmationPassword: '',
  };

  const initialStatus = {
    success: false,
  };

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    resetForm,
    setFieldError,
    status,
    setStatus,
  } = useFormik({
    initialValues,
    initialStatus,
    validationSchema,
    onSubmit: async (values) => {
      const { token } = await checkPassword({
        login: user.login,
        password: values.confirmationPassword,
      });

      if (token) {
        const newUserData: UnauthorizedUser = {
          name: values.name,
          login: values.login,
          password: values.password || values.confirmationPassword,
        };

        const { id, name, login } = (await updateUser(user.id, newUserData)) as AuthorizedUser;
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
        setStatus({ success: true });
      } else {
        setFieldError('confirmationPassword', 'Wrong password. Try again');
      }
    },
  });

  const customHandleChange = (e: React.ChangeEvent) => {
    handleChange(e);
    if (status.success) {
      setStatus({ success: false });
    }
  };

  const handleRemove = async () => {
    const response = await removeUser(user.id);
    alert(response.message);
  };

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit}>
        <h4>You can change the fields below</h4>
        <StyledInputContainer>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={values.name} onChange={customHandleChange} />
          {touched.name && errors.name ? <span>{errors.name}</span> : null}
        </StyledInputContainer>
        <StyledInputContainer>
          <label htmlFor="login">Login</label>
          <input id="login" name="login" value={values.login} onChange={customHandleChange} />
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
            onChange={customHandleChange}
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
            onChange={customHandleChange}
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
            onChange={customHandleChange}
          />
          {touched.confirmationPassword && errors.confirmationPassword ? (
            <span>{errors.confirmationPassword}</span>
          ) : null}
        </StyledInputContainer>
        <div>
          <StyledButton type="submit">Update form</StyledButton>
          {status.success ? <p>Changes saved!</p> : null}
        </div>
      </StyledForm>
      <StyledDangerBox>
        <p>
          Click the button if you want to remove your profile forever.
          <span> Be carefully.</span>
        </p>
        <StyledButtonDelete type="button" onClick={handleRemove}>
          Delete profile
        </StyledButtonDelete>
      </StyledDangerBox>
    </StyledContainer>
  );
}

export default ProfileForm;
