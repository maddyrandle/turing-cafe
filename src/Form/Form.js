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

  updateFormState = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
    console.log('Form state: ', this.state);
  }

  render() {

    return (
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.updateFormState}
          required
        />
        <input
          type="text"
          name="date"
          placeholder="Date(mm/dd)"
          value={this.state.date}
          onChange={this.updateFormState}
          required
        />
        <input
          type="text"
          name="time"
          placeholder="Time"
          value={this.state.time}
          onChange={this.updateFormState}
          required
        />
        <input
          type="string"
          name="number"
          placeholder="Number of guests"
          value={this.state.number}
          onChange={this.updateFormState}
          required
        />
        <button className="makeResBtn">Make Reservation</button>
      </form>
    )
  }
}

export default Form;
