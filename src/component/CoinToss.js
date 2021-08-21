import React from "react";
import Number from "./Number";
import Image from "./Image";

class CoinToss extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            head: {
                name: "head",
                number: 0,
                image: "./front.png",
            },
            tail: {
                name: "tail",
                number: 0,
                image: "./back.png",
            },
            result: "./front.png",
        }

    }

    handleTossUpdate = () => {
        let rand = Math.random() * 100;
        if (rand > 50) {
            this.setState({
                head: {
                    name: this.state.head.name,
                    number: this.state.head.number + 1,
                    image: this.state.head.image
                },
                result: this.state.head.image
            })
            console.log("inside handleTossUpdate head");
            console.log(this.state);
            console.log(this.state.result);
         } else {
            this.setState({
                tail: {
                    name: this.state.tail.name,
                    number: this.state.tail.number + 1,
                    image: this.state.tail.image
                },
                result: this.state.tail.image
            })
            console.log("inside handleTossUpdate tail");
            console.log(this.state);
            console.log(this.state.result);
        }
    }

    render() {
        return <React.Fragment>
            <h2>Dogo Coin Toss APP</h2>
            <Number
                name={this.state.head.name}
                number={this.state.head.number}
            />
            <Number
                name={this.state.tail.name}
                number={this.state.tail.number}
            />
            <Image
                url={this.state.result}
            />
            <button onClick={this.handleTossUpdate}>Toss</button>
        </React.Fragment>
    }
}

export default CoinToss