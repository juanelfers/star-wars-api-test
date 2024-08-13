"use client";

import { Divider } from "@nextui-org/react";
import Characters from "./components/Characters";
import SearchInput from "./components/SearchInput";
import useData from "./providers/DataProvider";
import Loading from "./components/Loading";

export default function Home() {
  const { loading } = useData();

  if (loading) return <Loading />;

  return (
    <div className="p-5 space-y-5">
      <h1 className="text-xl text-slate-300 font-bold">Star Wars</h1>
      <Divider />
      <SearchInput />
      <Divider />
      <Characters />
    </div>
  );
}
