import React, { useState, useEffect, useReducer } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import reservationSchema from '../utils/reservationSchema';
import { fetchAPI, submitAPI } from '../utils/api'

const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    return fetchAPI(new Date(action.payload));
  }
  return state; // O un estado inicial si no hay acción
};
const initializeTimes = () => {
  return fetchAPI(new Date()); // Carga los horarios para la fecha actual al inicio
};

export default function Reserve() {

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', null

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    occasion: '',
  };

  // Manejador para cuando la fecha cambia (para actualizar los horarios)
  const handleDateChange = (e, setFieldValue) => {
    const selectedDate = e.target.value;
    setFieldValue('date', selectedDate); // Actualiza el campo de fecha en Formik
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate }); // Dispara la actualización de horarios
  };

  // Manejador para el envío del formulario
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true); // Indica que el formulario se está enviando
    setSubmissionStatus(null); // Limpia el estado anterior

    try {
      const success = await submitAPI(values); // Llama a tu API simulada
      if (success) {
        setSubmissionStatus('success');
        resetForm(); // Limpia el formulario después del éxito
        // Opcional: Redirigir al usuario a una página de confirmación
        // navigate('/confirmation');
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus('error');
    } finally {
      setSubmitting(false); // Finaliza el envío
    }
  };

  return (
    <section className="reservation-section">
      {/* <h1>Booking your table</h1>
      {submissionStatus === 'success' && (
        <div className="success-message">Your booking has been successfully confirmed!</div>
      )}
      {submissionStatus === 'error' && (
        <div className="error-message">There was an error processing your booking. Please try again.</div>
      )} */}

      <Formik
        initialValues={initialValues}
        validationSchema={reservationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form className="reservation-form">

            <h1>Booking your table</h1>
            {submissionStatus === 'success' && (
              <div className="success-message">Your booking has been successfully confirmed!</div>
            )}
            {submissionStatus === 'error' && (
              <div className="error-message">There was an error processing your booking. Please try again.</div>
            )}
            {/* Campo de Fecha */}
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

            {/* Campo de Hora */}
            <label htmlFor="time">Time:</label>
            <Field as="select" id="time" name="time" required>
              <option value="">Select an hour</option>
              {availableTimes.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </Field>
            <ErrorMessage name="time" component="div" className="error-text" />

            {/* Campo de Comensales */}
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

            {/* Campo de Ocasión */}
            <label htmlFor="occasion">Occasion (Optional):</label>
            <Field as="select" id="occasion" name="occasion">
              <option value="">None</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Other">Other</option>
            </Field>
            <ErrorMessage name="occasion" component="div" className="error-text" />

            {/* Campos de Contacto */}




            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Make your reservation'}
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );






}