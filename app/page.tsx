"use client";

import useData from "./providers/DataProvider";
import Character from "./components/Character";

export default function Home() {
  const { loading, people } = useData();

  if (loading) return null;

  return (
    <div className="p-5 space-y-5">
      {/* Heading */}
      <h1 className="text-2xl">Star Wars</h1>

      <div className="grid grid-cols-custom gap-5">
        {people.map((character) => (
          <Character data={character} />
        ))}
      </div>
    </div>
  );
}
