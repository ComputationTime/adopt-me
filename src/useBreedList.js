import { useQuery } from "@tanstack/react-query";
import FetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], FetchBreedList);

  return [results?.data?.breeds ?? [], results.status];
}
