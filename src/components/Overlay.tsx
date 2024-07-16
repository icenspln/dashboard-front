import { ReactElement } from "react";

export function Overlay({ children }: { children?: ReactElement<any> }) {
  return (
    <div className="absolute left-0 top-0 bg-overlay w-screen h-screen z-0">
      {children}
    </div>
  );
}
