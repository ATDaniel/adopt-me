import React, { useState } from "react";

const SearchParams = () => {
  // hooks should NEVER go inside if's and for loops
  // useState is a hook; all hooks start with "use"
  const [location, setLocation] = useState("Seattle, WA"); // [variable, changeHandler] = hook(default)

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form action="">
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
