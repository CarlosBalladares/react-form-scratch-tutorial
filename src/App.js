import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleClick() {
    alert("hello");
  }

  render() {
    return (
      <div>
        <h1>Adopt me</h1>
        <Pet name="Harry" animal="dog" breed="Mixed" />
        <Pet name="Draco" animal="Draco" breed="Siberian Husky" />
        <Pet name="Luna" animal="Cat" breed="Unknown" />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
