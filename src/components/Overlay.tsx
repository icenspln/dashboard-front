import { ReactElement } from "react";

export function Overlay({ children }: { children?: ReactElement<any> }) {
  return (
    <div className="fixed inset-0 bg-overlay flex items-center justify-center z-50">
      {children}
    </div>
  );
}
