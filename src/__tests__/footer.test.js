import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import React from 'react'; 
import Footer from '../components/Footer'; 

describe('Footer Component', () => {
  test('renders the copyright text', () => {
    render(<Footer />);

    const copyrightText = screen.getByText(/7863 Washington Blvd/i);
    expect(copyrightText).toBeInTheDocument();
  });

  test('renders a footer element', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo'); 
    expect(footerElement).toBeInTheDocument();
  });
});