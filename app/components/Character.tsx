import { cn } from "@nextui-org/react";
import { IoPlanetSharp } from "react-icons/io5";

export default function Character({ data }) {
  return (
    <div
      className={cn(
        "rounded-lg p-3 bg-slate-900 cursor-pointer transition-colors",
        "border-2 border-slate-500 hover:border-slate-300"
      )}
    >
      <h5 className="text-sm text-slate-500 flex gap-2 items-center">
        {/* Species */}
        {data.species.map(({ name }) => name)}
        {!data.species.length && "Human"}
        {/* Planet */}
        <IoPlanetSharp /> {data.homeworld.name}
      </h5>
      {/* Name */}
      <h3>{data.name}</h3>
    </div>
  );
}
