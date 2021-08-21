import React, {Component} from "react";

class Image extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <img
                src={this.props.url}
            />
        );
    }
}

export default Image