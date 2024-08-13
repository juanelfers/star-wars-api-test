import { Input } from "@nextui-org/react";
import useFilters from "../providers/FiltersProvider";

export default function SearchInput() {
  const { search, setSearch } = useFilters();

  return (
    <Input
      value={search}
      onValueChange={setSearch}
      size="lg"
      variant="faded"
      label="Search your favorite character!"
    />
  );
}
