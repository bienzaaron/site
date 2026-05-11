import type { ReactNode } from "react";

export function Command({ children }: { children: ReactNode }) {
  return <p className="cmd">aj@rva $ {children}</p>;
}
