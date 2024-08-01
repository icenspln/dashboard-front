import { ReactElement } from "react";

export function Overlay({ children }: { children?: ReactElement<any> }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {children}
    </div>
  );
}
