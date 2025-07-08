import React, { useState, useRef, useReducer } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import reservationSchema from '../utils/reservationSchema';
import { fetchAPI, submitAPI } from '../utils/api'

export const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    return fetchAPI(new Date(action.payload));
  }
  return state;
};
const initializeTimes = () => {
  return fetchAPI(new Date());
};

export default function Reserve() {

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    occasion: '',
  };

  const handleDateChange = (e, setFieldValue) => {
    const selectedDate = e.target.value;
    setFieldValue('date', selectedDate);
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    setSubmissionStatus(null);
    setIsLoading(true);

    const delay = Math.random() * 1000 + 1000;

    setTimeout(async () => {
      try {
        console.log('submitApi called')
        console.log(values)
        const success = await submitAPI(values);
        console.log('submitApi finished')

        if (success) {
          setSubmissionStatus('success');
          resetForm();
        } else {
          setSubmissionStatus('error');
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmissionStatus('error');
      } finally {
        setSubmitting(false);
        setIsLoading(false);

        if (formRef.current) {
          formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, delay);
  };

  return (
    <section className="reservation-section">
      <Formik
        initialValues={initialValues}
        validationSchema={reservationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form className="reservation-form" ref={formRef}>

            <h1>Booking your table</h1>
            {submissionStatus === 'success' && (
              <div className="success-message">Your booking has been successfully confirmed!</div>
            )}
            {submissionStatus === 'error' && (
              <div className="error-message">There was an error processing your booking. Please try again.</div>
            )}
            <label htmlFor="firstName">FirstName:</label>
            <Field type="text" id="firstName" name="firstName" required />
            <ErrorMessage name="firstName" component="div" className="error-text" />

            <label htmlFor="lastName">LastName:</label>
            <Field type="text" id="lastName" name="lastName" required />
            <ErrorMessage name="lastName" component="div" className="error-text" />

            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" required />
            <ErrorMessage name="email" component="div" className="error-text" />
            <label htmlFor="date">Date:</label>
            <Field
              type="date"
              id="date"
              name="date"
              onChange={(e) => handleDateChange(e, setFieldValue)}
              required
            />
            <ErrorMessage name="date" component="div" className="error-text" />

            <label htmlFor="time">Time:</label>
            <Field as="select" id="time" name="time" required>
              <option value="">Select an hour</option>
              {availableTimes.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </Field>
            <ErrorMessage name="time" component="div" className="error-text" />

            <label htmlFor="guests">Number of guests:</label>
            <Field
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="10"
              required
            />
            <ErrorMessage name="guests" component="div" className="error-text" />

            <label htmlFor="occasion">Occasion (Optional):</label>
            <Field as="select" id="occasion" name="occasion">
              <option value="">None</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Other">Other</option>
            </Field>
            <ErrorMessage name="occasion" component="div" className="error-text" />

            <button type="submit" disabled={isSubmitting || isLoading} className='submit-btn'>
              {isLoading ? 'Sending...' : 'Make your reservation'}
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
}