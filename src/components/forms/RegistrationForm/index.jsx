import { USER_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchemas';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { USER_ROLES } from '../../../utils/constants.js';
import styles from './RegistrationForm.module.scss';

function RegistrationForm () {
  const initialValues = {
    firstName: '',
    lastName: '',
    login: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    role: '',
    checked: false,
  };

  const handleSubmit = (values, formikBag) => {
    console.log('Submit form with values', values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_VALIDATION_SCHEMA}
    >
      {({ values }) => (
        <Form className={styles.formContainer}>
          <div className={styles.rowFields}>
            <div className={styles.fieldGroup}>
              <Field
                name='firstName'
                type='text'
                placeholder='First name'
                className={styles.input}
              />
              <ErrorMessage
                name='firstName'
                component='div'
                className={styles.error}
              />
            </div>

            <div className={styles.fieldGroup}>
              <Field
                name='lastName'
                type='text'
                placeholder='Last name'
                className={styles.input}
              />
              <ErrorMessage
                name='lastName'
                component='div'
                className={styles.error}
              />
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <Field
              name='login'
              type='text'
              placeholder='Login'
              className={styles.input}
            />
            <ErrorMessage
              name='login'
              component='div'
              className={styles.error}
            />
          </div>

          <div className={styles.fieldGroup}>
            <Field
              name='email'
              type='email'
              placeholder='Email'
              className={styles.input}
            />
            <ErrorMessage
              name='email'
              component='div'
              className={styles.error}
            />
          </div>

          <div className={styles.fieldGroup}>
            <Field
              name='password'
              type='password'
              placeholder='Password'
              className={styles.input}
            />
            <ErrorMessage
              name='password'
              component='div'
              className={styles.error}
            />
          </div>

          <div className={styles.fieldGroup}>
            <Field
              name='passwordConfirmation'
              type='password'
              placeholder='Confirm password'
              className={styles.input}
            />
            <ErrorMessage
              name='passwordConfirmation'
              component='div'
              className={styles.error}
            />
          </div>

          <div className={styles.radioGroup}>
            <label
              className={`${styles.radioOption} ${
                values.role === USER_ROLES.BUYER ? styles.checked : ''
              }`}
            >
              <Field type='radio' name='role' value={USER_ROLES.BUYER} />
              <div className={styles.radioLabel}>
                <span className={styles.radioTitle}>Join As a Buyer</span>
                <span className={styles.radioDescription}>
                  I am looking for a Name, Logo or Tagline for my business,
                  brand or product.
                </span>
              </div>
            </label>

            <label
              className={`${styles.radioOption} ${
                values.role === USER_ROLES.CREATIVE ? styles.checked : ''
              }`}
            >
              <Field type='radio' name='role' value={USER_ROLES.CREATIVE} />
              <div className={styles.radioLabel}>
                <span className={styles.radioTitle}>Join As a Creative</span>
                <span className={styles.radioDescription}>
                  I plan to submit name ideas, Logo designs or sell names in
                  domain marketplace.
                </span>
              </div>
            </label>
          </div>

          <div className={styles.checkboxContainer}>
            <Field type='checkbox' name='checked' id='terms' />
            <label htmlFor='terms'>
              By clicking this checkbox you agree to our{' '}
              <a href='#' target='_blank'>
                Terms of Service
              </a>
            </label>
          </div>

          <button type='submit' className={styles.submitButton}>
            Create Account
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default RegistrationForm;
