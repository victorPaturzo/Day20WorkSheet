import { Component } from "react";
import './App.css';

class App extends Component {
    constructor(props){
      super(props);
      this.person = [
        {firstName: "Reggie", lastName: "White"}
      ];
      this.state = {
        personNumber: 0
    }
    
    }
    
    render() {
      return (
        <h1> {this.person[this.state.personNumber].firstName} {this.person[this.state.personNumber].lastName} </h1>
      )
    }
}

export default App;