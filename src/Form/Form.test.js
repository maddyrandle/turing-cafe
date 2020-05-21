import React from 'react';
import Form from './Form';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Form', () => {
  it('should render the correct form inputs', () => {
    const { getByPlaceholderText, getByText } = render(<Form />)

    const nameInput = getByPlaceholderText('Name');
    const dateInput = getByPlaceholderText('Date(mm/dd)');
    const timeInput = getByPlaceholderText('Time');
    const numberInput = getByPlaceholderText('Number of guests');
    const resBtn = getByText('Make Reservation');
  })

  it('passes the correct input values to the addReservation method', () => {
    const mockAddReservation = jest.fn();
    const { getByPlaceholderText, getByText } = render(<Form addReservation={mockAddReservation}/>)

    const nameInput = getByPlaceholderText('Name');
    const dateInput = getByPlaceholderText('Date(mm/dd)');
    const timeInput = getByPlaceholderText('Time');
    const numberInput = getByPlaceholderText('Number of guests');
    const makeResBtn = getByText('Make Reservation')

    fireEvent.change(nameInput, {target: {value: 'Maddy'}})
    fireEvent.change(dateInput, {target: {value: '05/21'}})
    fireEvent.change(timeInput, {target: {value: '1:07'}})
    fireEvent.change(numberInput, {target: {value: 3}})

    fireEvent.click(getByText('Make Reservation'))
    expect(mockAddReservation).toHaveBeenCalledWith({
      
    });

  })

})
