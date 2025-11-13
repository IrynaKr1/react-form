import React from 'react';
import { USER_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchemas';
import { ErrorMessage, Field, Form, Formik } from 'formik';

function RegistrationForm() {
  const initialValues = {
    firstName: '',
    lastName: '',
    login: '',
    email: '',
    password: '',
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
      <Form>
        <Field name='firstName' type='text' placeholder='Your firstname' />
        <ErrorMessage name='firstName' />
        <Field name='lastName' type='text' placeholder='Your lastname' />
        <ErrorMessage name='lastName' />
        <Field name='login' type='text' placeholder='Add your login' />
        <ErrorMessage name='login' />
        <Field name='email' type='email' placeholder='Add your email' />
        <ErrorMessage name='email' />
        <Field
          name='password'
          type='password'
          placeholder='Add your password'
        />
        <ErrorMessage name='password' />
        <Field
          name='passwordConfirmation'
          type='password'
          placeholder='Confirm your password'
        />
        <label>
          <Field type='radio' name='role' value='buyer' />
          Join as a buyer
        </label>
        <label>
          <Field type='radio' name='role' value='creative' />
          Join as a creative
        </label>
        <label>
          <Field type='checkbox' name='checked' value='terms' />
          By clicking this chechbox you agree to our Terms of Service
        </label>
        <button>Create account</button>
      </Form>
    </Formik>
  );
}

export default RegistrationForm;
