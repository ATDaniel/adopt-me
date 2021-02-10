import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";

const SearchParams = () => {
  // hooks should NEVER go inside if's and for loops
  // useState is a hook; all hooks start with "use"
  const [location, setLocation] = useState("Seattle, WA"); // [variable, changeHandler] = hook(default)
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS); //Using custom Hook from useDropdown.js
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      // remember, `pet` is an api client
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]); // clear Breeds list
    setBreed(""); // clear Breed selected

    //Call pet.breeds() api, then map response
    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStrings = apiBreeds.map(({ name }) => name); // map objects to strings
      setBreeds(breedStrings); // Finally, set Breeds list to the list of breed strings.
    }, console.error);
  }, [animal, setBreed, setBreeds]); // Dependency array

  // Every time there's a rerender, React checks if any of these things in the dependency array have
  // changed. If so, the Effect is ran.

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />

        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
