import React, { Component } from 'react';
import Form from '../Form/Form';
import ReservationsContainer from '../ReservationsContainer/ReservationsContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(reservationsData => this.setState({reservations: reservationsData}))
      .catch(err => console.error(err))
  }

  addReservation = (newReservation) => {
    console.log(newReservation);
    this.setState({reservations: [...this.state.reservations, newReservation]});
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          <ReservationsContainer reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
