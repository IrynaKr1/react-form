import * as yup from 'yup';

export const USER_ROLES = {
  BUYER: 'buyer',
  CREATIVE: 'creative',
};

export const LOGIN_VALIDATION_SCHEMA = yup
  .string()
  .min(4)
  .max(15, 'Must be 15 characters or less');

export const NAMES_VALIDATION_SCHEMA = yup.string().trim().required();

export const PASSWORD_VALIDATION_SCHEMA = yup
  .string()
  .required('No password provided')
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.');
