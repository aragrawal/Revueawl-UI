import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import '../css/App.css';

import axios from 'axios';

class App extends Component {

  constructor () {
    super();

    this.state = {
      city: '',
      result: ''
    };

    this.updateCity = this.updateCity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   updateCity(event){
		this.setState({city : event.target.value});
  }

  async handleSubmit () {
    var location = 'http://localhost:3010/api/location/'
    try {
      console.debug("URL: " + location + this.state.city);
      const resp = await axios.get(location + this.state.city)
      console.log(resp.request.responseText);
      // Since we are trying to use AJAX functionality, I think we should use async-await semantics
      // I don't know why are we using axios library

      // Ohh, and I don't like arrow syntax

      // .then(function(resp) {
      //   var respdata = resp.data;
      //   console.log(respdata);
      //   this.setState({result: respdata});
      // })
      // .catch(function(err) {
      //   console.error(err);
      // });
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
        {/* <form class="form-inline"> */}
        {/* Using a form makes page reload and the changes are lost after reload. We can use a div, or some other container.
        I don't want to mess up CSS-bootstrap, so leaving this as it is. */}
    			<div class="form-group">
      				<label for="city">City:</label>
      				<div class="col-4">
      					<input type="text" class="form-control" id="city" placeholder="Enter City" name="city" onChange={this.updateCity}></input>
      				</div>
    			</div>
    			<div class="form-group">
      				<label for="state">State:</label>
      				<div class="col-4">
      					<input type="text" class="form-control" id="state" placeholder="Enter State" name="state"></input>
      				</div>
    			</div>
    			<div class="form-group">
      				<label for="country">Country:</label>
      				<div class="col-4">
      					<input type="text" class="form-control" id="country" placeholder="Enter Country" name="country"></input>
      				</div>
    			</div>
    				<button class="btn btn-primary submitBtn" onClick={this.handleSubmit}>Submit</button>
  			{/* </form> */}
		</div>
      </div>
    );
  }
}

export default App;
