import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import UserCard from "./Components/UserCard";

class App extends Component {
  
  state = {
    myUser : [],
    followers: [],
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/KParrish193')
      .then(response => {
          console.log(`user data from CDM`, response);
          this.setState({
            myUser : response.data
          })
      })
        .catch(error => {
            console.log("The data was not returned", error);
      })
  
    axios
      .get('https://api.github.com/users/KParrish193/followers')
      .then(response => {
          console.log(`followers initial`, response.data);
          this.setState({ 
            followers : response.data
          });
      })
        .catch(error => {
          console.log("The data was not returned", error);
      });
  }

  render() {
      return (
      <div className="App">
        <h2>GitHub User Cards</h2>
        <UserCard 
          myUser = {this.state.myUser}
          followers = {this.state.followers}
        />
      </div>
    );
  };
}

export default App;
