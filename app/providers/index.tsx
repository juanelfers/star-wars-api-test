import { NextUIProvider } from "@nextui-org/react";
import { DataProvider } from "./DataProvider";

export default function Providers({ children }) {
  return (
    <NextUIProvider>
      <DataProvider>{children}</DataProvider>
    </NextUIProvider>
  );
}
