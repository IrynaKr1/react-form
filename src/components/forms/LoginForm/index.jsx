import { ErrorMessage, Field, Form, Formik } from 'formik';
import { USER_LOGIN_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchemas';

function LoginForm() {
  const initialValues = { login: '', password: '' };
  const handleSubmit = (values, formikBag) => {
    console.log('Submit form with values: ', values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_LOGIN_VALIDATION_SCHEMA}
    >
      <Form>
        <Field name='login' type='text' placeholder='Login' />
        <ErrorMessage name='login' />
        <Field name='password' type='password' />
        <ErrorMessage name='password' />
        <button type='submit'>Login</button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
