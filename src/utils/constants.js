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
