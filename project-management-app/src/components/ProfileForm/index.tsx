import React from 'react';
import { useFormik } from 'formik';
import { AuthorizedUser } from '../../interfaces/user';
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
