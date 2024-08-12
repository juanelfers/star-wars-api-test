'use client';

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
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://swapi.info/api/people").then(async (res) => {
      const characters = await res.json();
      setCharacters(characters);
      setLoading(false);
    });
  }, []);

  const data = useMemo(
    () => ({
      characters,
      loading,
    }),
    [characters, loading]
  );

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export default function useData() {
  return useContext(DataContext);
}
