import * as yup from 'yup';

const MIN_BOARD_NAME_LENGTH = 3;
const MAX_BOARD_NAME_LENGTH = 15;

const validationSchema = yup.object({
  boardName: yup
    .string()
    .required('The field is required')
    .min(MIN_BOARD_NAME_LENGTH, `It should be at least ${MIN_BOARD_NAME_LENGTH} symbols`)
    .max(MAX_BOARD_NAME_LENGTH, `It should be less than ${MAX_BOARD_NAME_LENGTH} symbols`),
});

export default validationSchema;
