import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import'./components/components.css';

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    .then(res => this.setState({ smurfs: res.data }))
    .catch(err => console.error(err));
  }

  //method for adding a new smurf to the Smurf DB
  //Note: this method gets called inside of another method in the SmurfForm component
  addSmurfHandler = (newSmurf) => {
    axios.post('http://localhost:3333/smurfs', newSmurf)
    .then(res => this.setState({ smurfs: res.data }))
    .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="village-img">
          <img src="https://www.topbestalternatives.com/wp-content/uploads/2017/11/smurfs-village.jpg" alt="smurf village" />
        </div>
        <Route exact path="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}/>
        <Route path="/smurf-form" render={props => <SmurfForm {...props} addSmurfHandler={this.addSmurfHandler} />} />
      </div>
    );
  }
}

export default App;
