import React, {Component} from "react";
import './App.css';

class App extends Component {
    constructor(props){
      super(props);
      this.people = [
          {firstName: "Reggie", lastName: "White"}
      ];
      
      
    }
    
    render() {
      return (
        <h1>{this.people[this.state.person].firstName, this.people[this.state.person].lastName}</h1>
      )
    }
}

export default App;