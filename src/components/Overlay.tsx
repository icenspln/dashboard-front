// import { ReactElement } from "react";

// export function Overlay({ children }: { children?: ReactElement<any> }) {
//  return (
// //    <div className="absolute left-0 top-0 bg-overlay w-screen h-screen z-0">
// //      {children}
// //    </div>
// //  );
// //}

// this code is for hiding the close button

import { ReactElement } from "react";
import CloseSvg from "../assets/icons/CloseSvg";

interface OverlayProps {
  children?: ReactElement<any>;
  onClose?: () => void;
  isVisible?: boolean;
}

export function Overlay({ children, onClose, isVisible }: OverlayProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
      <div className="relative bg-white p-6 rounded-lg shadow-lg">
        {isVisible && onClose && (
          <button
            className="absolute top-0 right-0 text-gray-700"
            onClick={onClose}
          >
            <CloseSvg />
          </button>
        )}
        <div className="top-5">{children}</div>
      </div>
    </div>
  );
}

// import { ReactElement } from "react";

// export function Overlay({ children }: { children?: ReactElement<any> }) {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="relative bg-white p-6 rounded-lg shadow-lg">
//         <button
//           className="absolute top-[-20px] right-[-20px]   p-1 flex items-center justify-center"
//           onClick={onClose}
//         >
//           <CloseSvg />
//         </button>
//         <div className="mt-4">{children}</div>
//       </div>
//     </div>
//   );
// }
