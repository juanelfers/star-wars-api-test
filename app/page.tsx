"use client";

import useData from "./providers/DataProvider";

export default function Home() {
  const { loading, ...data } = useData();

  console.log({ data, loading });

  return null;
}
