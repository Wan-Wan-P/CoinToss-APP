import logo from './logo.svg';
import './App.css';
import CoinToss from "./component/CoinToss";
import React, {useState} from "react";

class App extends React.Component {
  render() {
    return <div>
      <CoinToss />
    </div>
  }
}

export default App;
