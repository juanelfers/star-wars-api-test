import { createContext, useContext, useState } from "react";

export const FiltersContext = createContext({
  search: '',
  setSearch: str => {}
});

export function FiltersProvider({ children }) {
  const [search, setSearch] = useState("");

  return (
    <FiltersContext.Provider value={{ search, setSearch }}>
      {children}
    </FiltersContext.Provider>
  );
}

export default function useFilters() {
  return useContext(FiltersContext);
}
