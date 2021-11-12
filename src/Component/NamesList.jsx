import { Component } from "react";

class NamesList extends Component {
    constructor(props){
        super(props);
        this.state = {
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kellie']
        };
    }

    render() {
        return (
            <ul>
                {this.state.names}
            </ul>
        )
    }
}

export default NamesList;