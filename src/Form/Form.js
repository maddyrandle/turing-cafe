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
    console.log('form state: ', this.state);
    return (
      <p>Form will go here</p>
    )
  }
}

export default Form;
