import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders form with input fields', () => {
  const availableTimes = ['10:00 AM', '12:00 PM', '02:00 PM']; // Sample of available times
  const updateTimes = jest.fn(); // Mock function to see if it works

  const { getByLabelText, getByText } = render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />);
  
  // Do fields render?
  expect(getByLabelText('Name:')).toBeInTheDocument();
  expect(getByLabelText('Phone number:')).toBeInTheDocument();
  expect(getByLabelText('Date:')).toBeInTheDocument();
  expect(getByLabelText('Time:')).toBeInTheDocument();
  expect(getByLabelText('Number of guests:')).toBeInTheDocument();
  expect(getByLabelText("What's the occasion:")).toBeInTheDocument();
  expect(getByText('Book Now')).toBeInTheDocument();
});

test('updates available times when date field changes', async () => {
  const availableTimes = ['10:00 AM', '12:00 PM', '02:00 PM']; 
  const updateTimes = jest.fn(); 

  const { getByLabelText } = render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />);
  const dateInput = getByLabelText('Date:');
  
  // Fake clicking, changing dates
  fireEvent.change(dateInput, { target: { value: '2024-05-20' } });
  
  await waitFor(() => {
    expect(updateTimes).toHaveBeenCalledWith('2024-05-20', availableTimes);
  });
});