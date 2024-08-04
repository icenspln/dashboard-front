import { Dispatch, SetStateAction, useState } from "react";
import { createContext } from "react";

type StudentsTableContext = {
  updateModal: boolean;
  setUpdateModal: Dispatch<SetStateAction<boolean>>;
};

export const StudentsTableContext = createContext({
  updateModal: false,
  setUpdateModal: (a: any) => a,
});

export function StudentsTableContextProvider({ children }: { children: any }) {
  const [updateModal, setUpdateModal] = useState(true);

  return (
    <StudentsTableContext.Provider value={{ updateModal, setUpdateModal }}>
      {children}
    </StudentsTableContext.Provider>
  );
}
