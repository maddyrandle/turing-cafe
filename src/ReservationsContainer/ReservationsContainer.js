import React from 'react';
import Card from '../Card/Card';

const ReservationsContainer = ({ reservations }) => {

  const displayCard = () => {
    return reservations.map(reservation => {
      return (
        <Card
          key={reservation.id}
          id={reservation.id}
          name={reservation.name}
          date={reservation.date}
          time={reservation.time}
          number={reservation.number}
        />
      )
    })
  }

  return (
    <React.Fragment>
      { displayCard() }
    </React.Fragment>
  )
}

export default ReservationsContainer;
