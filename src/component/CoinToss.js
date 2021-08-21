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
                show: true
            },
            tail: {
                name: "tail",
                number: 0,
                image: "./back.png",
                show: false
            },
        }

    }

    handleTossUpdate = () => {
        let rand = Math.random() * 100;
        if (rand > 50) {
            this.setState({
                head: {
                    name: this.state.head.name,
                    number: this.state.head.number + 1,
                    image: this.state.head.image,
                    show: !this.state.head.show
                },
            })
        } else {
            this.setState({
                tail: {
                    name: this.state.tail.name,
                    number: this.state.tail.number + 1,
                    image: this.state.tail.image,
                    show: !this.state.head.show
                },
            })
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
                result={this.state}
            />
            <button onClick={this.handleTossUpdate}>Toss</button>
        </React.Fragment>
    }
}

export default CoinToss