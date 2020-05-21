import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: '',
    }
  }

  render() {

    return (
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.updateFormWithString}
          required
        />
        <input
          type="text"
          name="date"
          placeholder="Date(mm/dd)"
          value={this.state.date}
          onChange={this.updateFormWithString}
          required
        />
        <input
          type="text"
          name="time"
          placeholder="Time"
          value={this.state.time}
          onChange={this.updateFormWithString}
          required
        />
        <input
          type="number"
          name="number"
          placeholder="Number of guests"
          value={this.state.number}
          onChange={this.updateFormWithNumber}
          required
        />
        <button className="makeResBtn">Make Reservation</button>
      </form>
    )
  }
}

export default Form;
