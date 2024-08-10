import { createContext, ReactElement, useState } from "react";

type UpdateContextProps = {
  successModal: boolean;
  setSuccessModal: (a: boolean) => void;
};

export const UpdateContext = createContext<UpdateContextProps>({
  successModal: false,
  setSuccessModal: () => {},
});

export function UpdateContextProvider({
  children,
}: {
  children: ReactElement<any>;
}) {
  const [successModal, setSuccessModal] = useState(false);
  return (
    <UpdateContext.Provider value={{ successModal, setSuccessModal }}>
      {children}
    </UpdateContext.Provider>
  );
}
