import * as yup from 'yup';
import { USER_ROLES } from '../constants.js/';

import {
  LOGIN_VALIDATION_SCHEMA,
  NAMES_VALIDATION_SCHEMA,
  PASSWORD_VALIDATION_SCHEMA,
} from '../constants.js';

export const USER_VALIDATION_SCHEMA = yup.object({
  firstName: NAMES_VALIDATION_SCHEMA.max(25, 'Must be 25 characters or less'),
  lastName: NAMES_VALIDATION_SCHEMA.max(35, 'Must be 35 characters or less'),
  email: yup.string().email().required(),
  login: LOGIN_VALIDATION_SCHEMA,
  password: PASSWORD_VALIDATION_SCHEMA,
  passwordConfirmation: PASSWORD_VALIDATION_SCHEMA,
  role: yup
    .string()
    .oneOf([USER_ROLES.BUYER, USER_ROLES.CREATIVE], 'Please select a role')
    .required('Role is required'),
  checked: yup
    .boolean()
    .oneOf([true], 'You must accept the terms and conditions')
    .required('You must accept the terms and conditions'),
});

export const USER_LOGIN_VALIDATION_SCHEMA = yup.object({
  login: LOGIN_VALIDATION_SCHEMA.required('No login provided'),
  password: yup
    .string()
    .required('No password provided')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});
