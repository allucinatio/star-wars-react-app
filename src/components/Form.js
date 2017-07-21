import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      value: '',
      pilot: ''
    }
  }

  handleNameChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({pilot: this.state.value})
    this.setState({name: ''})
  }


  render () {
    return (
      <div className = "form">
        <div className = "card">
          <h2 className = "card-header">
            What's your name, pilot?
          </h2>
          <div className="card-block">
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleNameChange} name="name" type="text" value={this.state.value} />
            <input type="submit" value="Submit" />
          </form>
          <h1> {this.state.pilot} </h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Form;
