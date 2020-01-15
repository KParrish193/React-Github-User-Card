import React, { Component } from 'react';
import axios from 'axios';
import UserCard from "./Components/UserCard"
import './App.css';

class App extends Component {
  
  state = {
    followers: [],
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/KParrish193")
      .then(response => {
          console.log(response.data);
          this.setState(response.data);
      // axios.get("https://api.github.com/users/KParrish193/followers")
      // .then(response => {
      //   response.data.forEach(item => {
      //   axios.get(item.url)
      //     .then(response => {
      //       console.log(response.data);
      //       this.setState(response.data);
      //     })
      //   })
      // })
      // .catch(error => {
      // console.log("The data was not returned", error);
      // })
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }

  render() {

      return (
      <div className="App">
        <UserCard 
          props = {this.state}
        />
      </div>
    );
  };
}

export default App;
