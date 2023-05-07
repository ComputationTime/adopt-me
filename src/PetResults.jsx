import Pet from "./Pet";

const PetResults = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>Pets not found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            name={pet.name}
            location={`${pet.city}, ${pet.state}`}
            key={pet.id}
          ></Pet>
        ))
      )}
    </div>
  );
};

export default PetResults;
