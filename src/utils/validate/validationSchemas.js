import * as yup from 'yup';

export const USER_VALIDATION_SCHEMA = yup.object({
  firstName: yup
    .string()
    .trim()
    .max(25, 'Must be 25 characters or less')
    .required(),
  lastName: yup
    .string()
    .trim()
    .max(35, 'Must be 35 characters or less')
    .required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .required('No password provided')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export const USER_LOGIN_VALIDATION_SCHEMA = yup.object({
  login: yup.string().min(4).max(15, 'Must be 15 characters or less'),
  password: yup
    .string()
    .required('No password provided')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});
