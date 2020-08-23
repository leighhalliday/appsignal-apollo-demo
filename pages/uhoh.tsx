import { useEffect } from "react";

export default function Uhoh() {
  useEffect(() => {
    throw new Error("Uh Oh...");
  }, []);

  return <h1>Uh Oh</h1>;
}
