import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: false,
      name: '',
      age: '',
      height: ''
    };
  }

  componentDidMount() {
    if(this.props.formType === 'edit') this.setState({ editForm: true });
  }

  addSmurf = event => {
    event.preventDefault();
    
    //convert the 'age' value into an integer
    const ageInt = parseInt(this.state.age, 10);

    //create a newSmurf object
    const newSmurf = {
      name: this.state.name,
      age: ageInt,
      height: this.state.height
    }

    //invoke the addSmurfHandler method from App.js, with the appropriate arguments
    this.props.addSmurfHandler(newSmurf, this.props.history);

    //reset the values on state
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="smurf-form">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            className="input-field"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            className="input-field"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            className="input-field"
          />
          <button type="submit" className="input-btn">{(this.state.editForm)? 'Edit This Smurf': 'Add New Smurf'}</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
