import { useEffect } from "react";

export default function Boundary() {
  useEffect(() => {
    throw new Error("Showing boundary");
  }, []);

  return <h1>Error</h1>;
}
