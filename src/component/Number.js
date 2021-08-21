import React, {Component} from "react";

class Number extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        console.log("inside number component")
        console.log(this.props)
        return (
            <div>
                <h3>{this.props.name}</h3>
                <h4>{this.props.number}</h4>
            </div>
        );
    }
}

export default Number