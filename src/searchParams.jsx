import { useEffect, useState } from "react";
import useBreedList from "./useBreedList";
import PetResults from "./PetResults";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breedList] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }

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
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            placeholder="Location"
            value={location}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            type="text"
            onChange={(e) => setAnimal(e.target.value)}
            id="animal"
            placeholder="animal"
            value={animal}
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
            onChange={(e) => setBreed(e.target.value)}
            id="breed"
            placeholder="Breed"
            value={breed}
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
