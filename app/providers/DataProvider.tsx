import { createContext, useContext, useMemo } from "react";

const mapPeople = ({ people, planets, species }) => ({
  people: people.map((char) => {
    const c = { ...char };
    c.homeworld = planets[c.homeworld.split("/").pop() - 1];
    c.species = c.species.map(
      (specie) => species[specie.split("/").pop() - 1]
    );

    return c;
  }),
});

export const DataContext = createContext({
  data: {},
});

export function DataProvider({
  apiData: { people, planets, species },
  children,
}) {
  const data = useMemo(
    () => ({
      ...mapPeople({ people, planets, species }),
      planets,
      species,
    }),
    []
  );

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export default function useData() {
  return useContext(DataContext);
}
