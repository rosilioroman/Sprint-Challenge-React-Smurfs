import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

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
        <SmurfForm addSmurfHandler={this.addSmurfHandler}/>
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
