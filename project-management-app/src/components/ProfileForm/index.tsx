import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { AuthorizedUser, EditableUserData, UnauthorizedUser } from '../../interfaces/user';
import ConfirmationModal from '../ConfirmationModal';
import { onSignIn, onSignOut } from '../../store/slices/user';
import validationSchema from './validationSchema';
import { checkPassword, removeUser } from '../../utils/users-api';
import { updateUser } from '../../utils/users-api';
import { setToLocalStorage } from '../../utils/common';
import { useSignOut } from '../../hooks';
import { useUserSelector } from '../../store/selectors';
import {
  StyledButton,
  StyledButtonDelete,
  StyledContainer,
  StyledDangerBox,
  StyledForm,
  StyledInputContainer,
} from './styles';
import { useTranslation } from 'react-i18next';

function ProfileForm() {
  const { user } = useUserSelector();
  const dispatch = useDispatch();
  const signOut = useSignOut();
  const { t } = useTranslation();

  const [isGoingToRemove, setIsGoingToRemove] = useState(false);

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
      if (values.password !== values.repeatedPassword) {
        setFieldError('repeatedPassword', t('profilePage.errors.passwordMatch'));
        return;
      }

      const { token } = await checkPassword({
        login: initialValues.login,
        password: values.confirmationPassword,
      });

      if (token) {
        const newUserData: UnauthorizedUser = {
          name: values.name,
          login: values.login,
          password: values.password || values.confirmationPassword,
        };
        const userId = user ? user.id : '';

        const response = await updateUser(userId, newUserData, token);

        if ('message' in response) {
          toast.error(response.message);
        } else {
          const { id, name, login } = response;
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
        }
      } else {
        setFieldError('confirmationPassword', t('profilePage.errors.wrongPassword'));
      }
    },
  });

  const customHandleChange = (e: React.ChangeEvent) => {
    handleChange(e);
    if (status.success) {
      setStatus({ success: false });
    }
  };

  const handleRemove = () => setIsGoingToRemove(true);

  const handleConfirmDeletion = async () => {
    if (!user) return;
    const response = await removeUser(user.id, user.token);
    if (!response) {
      signOut();
      dispatch(onSignOut());
    } else {
      toast.error(response.message);
    }
  };

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit}>
        <h4>{t('profilePage.subtitle')}</h4>
        <StyledInputContainer>
          <label htmlFor="name">{t('profilePage.fields.name')}</label>
          <input id="name" name="name" value={values.name} onChange={customHandleChange} />
          {touched.name && errors.name ? <span>{errors.name}</span> : null}
        </StyledInputContainer>
        <StyledInputContainer>
          <label htmlFor="login">{t('profilePage.fields.login')}</label>
          <input id="login" name="login" value={values.login} onChange={customHandleChange} />
          {touched.login && errors.login ? <span>{errors.login}</span> : null}
        </StyledInputContainer>
        <p>{t('profilePage.fields.passwordDescription')}</p>
        <StyledInputContainer>
          <label htmlFor="password">{t('profilePage.fields.password')}</label>
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
          <label htmlFor="repeatedPassword">{t('profilePage.fields.repeatPassword')}</label>
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
        <p>{t('profilePage.fields.confirmPassword')}</p>
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
          <StyledButton type="submit">{t('profilePage.buttons.update')}</StyledButton>
          {status.success ? <p>{t('profilePage.succeedChanges')}</p> : null}
        </div>
      </StyledForm>
      <StyledDangerBox>
        <p>
          {t('profilePage.deletingWarning.part1')}
          <span> {t('profilePage.deletingWarning.part2')}</span>
        </p>
        <StyledButtonDelete type="button" onClick={handleRemove}>
          {t('profilePage.buttons.delete')}
        </StyledButtonDelete>
      </StyledDangerBox>
      {isGoingToRemove && (
        <ConfirmationModal onConfirm={handleConfirmDeletion} setIsOpen={setIsGoingToRemove}>
          <p>{t('profilePage.modalWarning.part1')}</p>
          <p>{t('profilePage.modalWarning.part2')}</p>
        </ConfirmationModal>
      )}
    </StyledContainer>
  );
}

export default ProfileForm;
