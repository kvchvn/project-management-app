import React from 'react';
import { useFormik } from 'formik';
import useCreatingBoard from '../../hooks/use-creating-board';
import getValidationSchema from './validationSchema';
import { StyledInput, StyledForm, StyledButtonCreate } from './styles';
import StyledButton from '../../styles/components/StyledButton';

interface BoardFormProps {
  closeModal: () => void;
}

const BoardForm = ({ closeModal }: BoardFormProps) => {
  const createBoard = useCreatingBoard();
  const initialValues = {
    boardName: '',
  };
  const { t } = useTranslation();
  const validationSchema = getValidationSchema(t);

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async ({ boardName }) => {
      await createBoard.mutateAsync(boardName);
      closeModal();
    },
  });

  return (
    <StyledForm onSubmit={handleSubmit}>
      <p>{t('boardForm.enterName')}</p>
      <section>
        <StyledInput
          id="boardName"
          name="boardName"
          value={values.boardName}
          onChange={handleChange}
        />
        {touched.boardName && errors.boardName ? <span>{errors.boardName}</span> : null}
      </section>
      <StyledButton variant="primary" type="submit">
        {t('boardForm.create')}
      </StyledButton>
    </StyledForm>
  );
};

export default BoardForm;
