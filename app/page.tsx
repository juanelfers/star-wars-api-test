"use client";

import useData from "./providers/DataProvider";

export default function Home() {
  const { loading, people } = useData();

  console.log({ loading });
  if (loading) return null;

  return (
    <div className="p-5 space-y-5">
      <h1 className="text-2xl">Star Wars</h1>
      <div className="grid grid-cols-custom gap-5">
        {people.map((character) => (
          <div className={`rounded-lg p-3 border-2 bg-slate-900`}>
            <h3>{character.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
