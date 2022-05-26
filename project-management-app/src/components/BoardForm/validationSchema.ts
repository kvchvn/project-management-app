import { TFunction } from 'i18next';
import * as yup from 'yup';

const MIN_BOARD_NAME_LENGTH = 3;
const MAX_BOARD_NAME_LENGTH = 15;

const getValidationSchema = (t: TFunction) =>
  yup.object({
    boardName: yup
      .string()
      .required(t('authPage.errors.required'))
      .min(
        MIN_BOARD_NAME_LENGTH,
        `${t('authPage.errors.password.part1')} ${MIN_BOARD_NAME_LENGTH} ${t(
          'authPage.errors.password.part2'
        )}`
      )
      .max(
        MAX_BOARD_NAME_LENGTH,
        `${t('boardForm.errors.max.part1')} ${MAX_BOARD_NAME_LENGTH} ${t(
          'boardForm.errors.max.part2'
        )}`
      ),
  });

export default getValidationSchema;
