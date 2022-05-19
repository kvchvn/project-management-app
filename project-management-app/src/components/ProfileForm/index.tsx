import React from 'react';
import { useFormik } from 'formik';
import { AuthorizedUser } from '../../interfaces/user';
import {
  StyledButtonDelete,
  StyledContainer,
  StyledDangerBox,
  StyledForm,
  StyledInputContainer,
} from './styles';
import { useUserSelector } from '../../store/slices/user';
import validationSchema from './validationSchema';

type EditableFields = Pick<AuthorizedUser, 'name' | 'login'>;

function ProfileForm() {
  const user = useUserSelector() as EditableFields;

  const defaultUser: EditableFields = {
    name: '',
    login: '',
  };

  const initialValues = user || defaultUser;
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => alert(values.name + '__' + values.login),
  });

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit}>
        <p>You can change the fields below.</p>
        <StyledInputContainer>
          <input
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder=" "
          />
          <label htmlFor="name">Name</label>
          {touched.name && errors.name ? <span>{errors.name}</span> : null}
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
          {touched.login && errors.login ? <span>{errors.login}</span> : null}
        </StyledInputContainer>
        <button type="submit">Update form</button>
      </StyledForm>
      <StyledDangerBox>
        <p>
          This button will remove your profile forever.
          <strong> Be carefully.</strong>
        </p>
        <StyledButtonDelete type="button">Delete profile</StyledButtonDelete>
      </StyledDangerBox>
    </StyledContainer>
  );
}

export default ProfileForm;
