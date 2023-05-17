import { useState } from "react";
import useBreedList from "./useBreedList";
import PetResults from "./PetResults";
import fetchSearch from "./fetchSearch";
import { useQuery } from "@tanstack/react-query";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [animal, setAnimal] = useState("");
  const [petParams, setPetParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [breedList] = useBreedList(animal);

  const results = useQuery(["animal info", petParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            location: formData.get("location") ?? "",
            breed: formData.get("breed") ?? "",
          };

          setPetParams(obj);
        }}
      >
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            placeholder="Location"
            name="location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            type="text"
            id="animal"
            placeholder="animal"
            name="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option value=""></option>
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            type="text"
            disabled={breedList.length == 0}
            id="breed"
            placeholder="Breed"
            name="breed"
          >
            <option value=""></option>
            {breedList.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <PetResults pets={pets} />
    </div>
  );
};

export default SearchParams;
