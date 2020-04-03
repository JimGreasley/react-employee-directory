import React, { Component } from "react";
import EmployeeRow from "./components/EmployeeRow";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./app.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a Employee Table Row component for each friend object
  render() {
    return (
      <table>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Occupation</th>
          <th scope="col">Location</th>
        </tr>
        {this.state.friends.map(friend => (
          <EmployeeRow
            id={friend.id}
            key={friend.id}
            name={friend.name}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </table>
    );
  }
}

export default App;

//             removeFriend={this.removeFriend}
//            image={friend.image}