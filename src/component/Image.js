import React, {Component} from "react";

class Image extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("inside image component:");
        console.log(this.props)
        return (
            <img style={{width: "10%"}}
                src={this.props.url}
            />
        );
    }
}

export default Image