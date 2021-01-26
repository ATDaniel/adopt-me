import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "havanese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Winston",
  //     animal: "Cat",
  //     breed: "American Shorthair",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "Bird",
  //     breed: "cokcatiel",
  //   }),
  // ]);
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Winston" animal="Cat" breed="Domestic Shorthair" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
