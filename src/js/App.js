import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import '../css/App.css';

class App extends Component {
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
  			<form class="form-inline">
    			<div class="form-group">
      				<label for="city">City:</label>
      				<div class="col-4">
      					<input type="text" class="form-control" id="city" placeholder="Enter City" name="city"></input>
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
    				<button type="submit" class="btn btn-primary">Submit</button>
  			</form>
		</div>
      </div>
    );
  }
}

export default App;
