import { Component } from "react";
import './App.css';

class App extends Component {
    constructor(props){
      super(props);
      this.people = [
        {firstName: "Reggie", lastName: "White"}
      ];
      this.state = {
        person: 0
    }
    
    }
    
    render() {
      return (
        <h1> {this.people[this.state.person].firstName} {this.people[this.state.person].lastName} </h1>
      )
    }
}

export default App;