import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Date.now(),
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  updateFormState = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  addReservationToAppState = (e) => {
    e.preventDefault();
    this.props.addReservation(this.state);
    this.clearForm();
  }

  clearForm = () => {
    this.setState({
      id: Date.now(),
      name: '',
      date: '',
      time: '',
      number: ''
    })
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
        <button className="makeResBtn" onClick={this.addReservationToAppState}>Make Reservation</button>
      </form>
    )
  }
}

export default Form;
