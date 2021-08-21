import React, {Component} from "react";

class Image extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <img style={{width: "10%"}}
                src={this.props.result.head.show ?this.props.result.head.image:this.props.result.tail.image}
            />
        );
    }
}

export default Image