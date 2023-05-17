const fetchSearch = async ({ queryKey }) => {
  const { animal, location, breed } = queryKey[1];

  const results = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!results.ok) {
    throw Error("Search results failed");
  }

  return results.json();
};

export default fetchSearch;
