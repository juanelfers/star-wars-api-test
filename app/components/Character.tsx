import { cn } from "@nextui-org/react";
import { IoPlanetSharp } from "react-icons/io5";
import useTypewriter from "../hooks/useTypewriter";
import useFilters from "../providers/FiltersProvider";

export default function Character({ data }) {
  const { setSearch } = useFilters();
  const searchBy = (search) => () => setSearch(search);

  return (
    <div
      className={cn(
        "rounded-xl p-3 bg-default-100 cursor-pointer transition-colors",
        "border-2 border-default-200 hover:border-default-300"
      )}
    >
      <h5 className="text-sm text-slate-500 flex gap-2 items-center">
        {/* Species */}
        {data.species.map(({ name }) => (
          <span
            key={name}
            className="hover:text-slate-400 transition-colors"
            onClick={searchBy(name)}
          >
            {name}
          </span>
        ))}
        {/* Homeworld */}
        <IoPlanetSharp />{" "}
        <span
          className="hover:text-slate-400 transition-colors"
          onClick={searchBy(data.homeworld.name)}
        >
          {data.homeworld.name}
        </span>
      </h5>
      {/* Name */}
      <h3>{useTypewriter(data.name, 100 / data.name.length)}</h3>
    </div>
  );
}
