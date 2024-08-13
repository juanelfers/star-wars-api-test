import { createContext, useContext, useEffect, useState } from "react";

const mapPeople = ({ people, planets, species }) => {
  people.forEach((char) => {
    char.homeworld = planets[char.homeworld.split("/").pop() - 1];
    char.species = char.species.map(
      (specie) => species[specie.split("/").pop() - 1]
    );
  });
  return { people };
};

export const DataContext = createContext({
  loading: false,
  data: {},
});

export function DataProvider({ children }) {
  const [data, setData] = useState({
    people: [],
    planets: [],
    species: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const promises = ["people", "planets", "species"].map((group) =>
      fetch(`https://swapi.info/api/${group}`)
    );

    Promise.all(promises).then(async (res) => {
      const [people, planets, species] = await Promise.all(
        res.map((res) => res.json())
      );
      setData({ ...mapPeople({ people, planets, species }), planets, species });
      setLoading(false);
    });
  }, []);

  return (
    <DataContext.Provider value={{ loading, ...data }}>
      {children}
    </DataContext.Provider>
  );
}

export default function useData() {
  return useContext(DataContext);
}
