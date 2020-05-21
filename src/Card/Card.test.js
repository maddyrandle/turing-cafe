import React from 'react';
import Card from './Card';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Card', () => {
  it('should render the correct information on a card', () => {
    const { getByText } = render(
      <Card
        id={10}
        name={'Maddy'}
        date={'05/21'}
        time={'1:07'}
        number={3}
      />)

    const name = getByText('Maddy')
    const date = getByText('05/21')
    const time = getByText('1:07 pm')
    const number = getByText('Number of guests: 3')
    const cancelBtn = getByText('Cancel')
  })

})
