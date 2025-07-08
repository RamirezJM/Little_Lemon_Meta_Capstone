import * as yup from 'yup';

const reservationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, 'Must be at least 2 characters')
    .max(50, 'Must be 50 characters or less')
    .required('First name is required'),
  lastName: yup
    .string()
    .min(2, 'Must be at least 2 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Last name is required'),
  email: yup
    .string()
    .email('Invalid email format. (username@domain.com)')
    .required('Email is required'),
  date: yup
    .date()
    .required('Date is required')
    .min(new Date(), 'Cannot book in the past'),
  time: yup
    .string()
    .required('Time is required')
    .matches(/^(?:[01]\d|2[0-3]):(?:[0-5]\d)$/, 'Invalid time format (HH:MM)'), 
  guests: yup
    .number()
    .min(1, 'Must be at least 1 guest')
    .max(10, 'Maximum 10 guests')
    .required('Number of guests is required'),
  occasion: yup
    .string()
    .oneOf(['Birthday', 'Anniversary', 'Other'], 'Invalid occasion')
    .notRequired(), 
});

export default reservationSchema;

