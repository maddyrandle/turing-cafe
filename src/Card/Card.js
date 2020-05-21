import React from 'react';
import './Card.css';

const Card = ({ id, name, date, time, number }) => {

  return (
    <article className="card-wrapper">
      <h1>{name}</h1>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
      <button className="cancelBtn">Cancel</button>
    </article>
  )
}

export default Card;
