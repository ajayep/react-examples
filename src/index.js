import React from "react";
import ReactDOM from "react-dom";
import { Switch } from "./switch";
import "./styles.css";

class Toggle extends React.Component {
  state = { on: false };

  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => this.props.onToggle(this.state.on)
    );

  render() {
    const { on } = this.state;
    return <Switch on={on} onClick={this.toggle} />;
  }
}

function Usage({ onToggle = (...args) => console.log("onToggle", ...args) }) {
  return <Toggle onToggle={onToggle} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Usage />, rootElement);
