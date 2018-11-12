import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleClick() {
    alert("hello");
  }

  render() {
    return React.createElement("div", {}, [
      React.createElement("h1", { onClick: this.handleClick }, "adopt me"),
      React.createElement(Pet, {
        name: "Harry",
        animal: "Dog",
        breed: "Mixed"
      }),
      React.createElement(Pet, {
        name: "Draco",
        animal: "Dog",
        breed: "Siberian Husky"
      }),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Cat",
        breed: "Unknown"
      })
    ]);
  }
}

render(React.createElement(App), document.getElementById("root"));
