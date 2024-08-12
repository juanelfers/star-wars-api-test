"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export const DataContext = createContext({
  loading: false,
  characters: [],
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
      setData({ people, planets, species });
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
