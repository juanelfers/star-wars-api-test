"use client";

import { NextUIProvider } from "@nextui-org/react";
import { DataProvider } from "./DataProvider";
import { FiltersProvider } from "./FiltersProvider";

export default function Providers({ apiData, children }) {
  return (
    <NextUIProvider>
      <DataProvider apiData={apiData}>
        <FiltersProvider>{children}</FiltersProvider>
      </DataProvider>
    </NextUIProvider>
  );
}
