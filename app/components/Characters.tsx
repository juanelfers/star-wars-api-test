import { useMemo } from "react";
import useData from "../providers/DataProvider";
import useFilters from "../providers/FiltersProvider";
import Character from "./Character";

export default function Characters() {
  const { people } = useData();
  const { search } = useFilters();

  const characters = useMemo(() => {
    if (!search) return people;

    const match = (str) => str.toLowerCase().includes(search.toLowerCase());

    return people.filter(
      (char) =>
        match(char.name) ||
        match(char.homeworld.name) ||
        char.species.find((species) => match(species.name))
    );
  }, [people, search]);

  if (!characters.length) return <div className="text-warning">No results for the applied filters</div>;

  return (
    <div className="grid grid-cols-custom gap-5">
      {characters.map((character) => (
        <Character key={character.name} data={character} />
      ))}
    </div>
  );
}
