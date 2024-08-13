import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <Spinner label="Loading" color="primary" labelColor="primary" />
    </div>
  );
}
