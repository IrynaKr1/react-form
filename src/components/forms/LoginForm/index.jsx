import { ErrorMessage, Field, Form, Formik } from 'formik';
import { USER_LOGIN_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchemas';
import styles from './LoginForm.module.scss';

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
      <Form className={styles.formContainer}>
        <Field
          name='login'
          type='text'
          placeholder='Login'
          className={styles.input}
        />
        <ErrorMessage name='login' component='div' className={styles.error} />
        <Field name='password' type='password' className={styles.input} />
        <ErrorMessage
          name='password'
          component='div'
          className={styles.error}
        />
        <button type='submit' className={styles.submitButton}>
          Login
        </button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
