import React from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1 id="something-important">Adopt Me!</h1>
        {/* <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Winston" animal="Cat" breed="Domestic Shorthair" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" /> */}
        <SearchParams />
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
