"use client";

import { NextUIProvider } from "@nextui-org/react";
import { DataProvider } from "./DataProvider";
import { FiltersProvider } from "./FiltersProvider";

export default function Providers({ children }) {
  return (
    <NextUIProvider>
      <DataProvider>
        <FiltersProvider>{children}</FiltersProvider>
      </DataProvider>
    </NextUIProvider>
  );
}
