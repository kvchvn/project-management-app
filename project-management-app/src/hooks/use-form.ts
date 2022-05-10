import { useState } from 'react';
import { FormikConfig, useFormik } from 'formik';

const useForm = <T>(props: FormikConfig<T>) => {
  const [shouldValidateOnChange, setShouldValidateOnChange] = useState(false);

  const formik = useFormik({
    ...props,
    validateOnChange: shouldValidateOnChange,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setShouldValidateOnChange(true);
    formik.handleSubmit(e);
  };

  return { ...formik, handleSubmit };
};

export default useForm;
