import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import '../css/App.css';

import axios from 'axios';

class App extends Component {

  constructor () {
    super();

    this.state = {
      city: '',
      state: '',
      country: '',
    };

    this.updateCity = this.updateCity.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updateCountry = this.updateCountry.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   updateCity(event){
		this.setState({city : event.target.value});
  }

   updateState(event){
		this.setState({state : event.target.value});
  }

   updateCountry(event){
		this.setState({country : event.target.value});
  }

  async handleSubmit () {
    var location = 'http://localhost:3010/api/location?'
    try {
      const resp = await axios.get(location + 'city=' + this.state.city + '&state=' + this.state.state + '&country=' + this.state.country)
      console.log(resp.request.responseText);
    } catch(error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Reveuawl</h1>
        </header>
        <p className="App-intro">
          Your one stop for all the reviews
        </p>			 
		<div class="container">
    		<div class="form-group">
      			<label for="city">City:</label>
      			<div class="col-12">
      				<input type="text" class="form-control" id="city" placeholder="Enter City" name="city" onChange={this.updateCity}></input>
      			</div>
    		</div>
    		<div class="form-group">
      			<label for="state">State:</label>
      			<div class="col-12">
      				<input type="text" class="form-control" id="state" placeholder="Enter State" name="state" onChange={this.updateState}></input>
      			</div>
    		</div>
    		<div class="form-group">
      			<label for="country">Country:</label>
      			<div class="col-12">
      				<input type="text" class="form-control" id="country" placeholder="Enter Country" name="country" onChange={this.updateCountry}></input>
      			</div>
    		</div>
    			<button class="btn btn-primary submitBtn" onClick={this.handleSubmit}>Submit</button>
		</div>
      </div>
    );
  }
}

export default App;
