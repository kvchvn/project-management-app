import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { useCreateTask } from '../../hooks';
import { TStore } from '../../store';
import StyledButton from '../../styles/components/StyledButton';
import { setOrder } from '../../utils/common';
import Modal from '../Modal';
import { StyledForm, StyledInput, StyledButtonsContainer, StyledTextarea } from '../Task/styles';
import { taskValidationSchema } from '../Task/validation-schema';
import { StyledCreateTaskButton } from './styles';

function TaskCreator({ columnId }: { columnId: string }) {
  const { t } = useTranslation();
  const { tasksByColumns } = useSelector((store: TStore) => store.taskReducer);
  const lastTaskOrder = tasksByColumns[columnId]?.at(-1)?.order;

  const [isOpenModal, setIsOpenModal] = useState(false);

  const { mutateAsync: create } = useCreateTask({ columnId });

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: { title: '', description: '' },
    validationSchema: taskValidationSchema,
    onSubmit: async ({ title, description }, { resetForm }) => {
      await create({
        title,
        order: setOrder(lastTaskOrder),
        description,
      });
      resetForm();
      setIsOpenModal(false);
    },
  });

  const handleIsOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <div>
      {isOpenModal ? (
        <Modal onClose={handleIsOpenModal}>
          <StyledForm onSubmit={handleSubmit} onReset={handleIsOpenModal}>
            <StyledInput
              id="title"
              name="title"
              value={values.title}
              onChange={handleChange}
              placeholder={t('boardPage.creatingTask.placeholder.title')}
            />
            {errors.title && <span>{errors.title}</span>}
            <StyledTextarea
              id="description"
              name="description"
              value={values.description}
              onChange={handleChange}
              placeholder={t('boardPage.creatingTask.placeholder.description')}
            />
            {errors.description && <span>{errors.description}</span>}
            <StyledButtonsContainer>
              <StyledButton variant="warning" type="reset">
                {t('taskModal.buttons.cancel')}
              </StyledButton>
              <StyledButton variant="primary" type="submit">
                {t('taskModal.buttons.create')}
              </StyledButton>
            </StyledButtonsContainer>
          </StyledForm>
        </Modal>
      ) : (
        <StyledCreateTaskButton variant="primary" onClick={handleIsOpenModal}>
          {t('boardPage.creatingTask.buttonCreate')}
        </StyledCreateTaskButton>
      )}
    </div>
  );
}

export default TaskCreator;
