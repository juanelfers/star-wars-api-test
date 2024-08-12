'use client';

import useData from "./providers/DataProvider";

export default function Home() {
  const { characters, loading } = useData();

  console.log({ characters, loading });

  return null;
}
