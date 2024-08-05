import { Dispatch, SetStateAction, useState } from "react";
import { createContext } from "react";

type StudentsTableContext = {
  updateModal: boolean;
  setUpdateModal: Dispatch<SetStateAction<boolean>>;
  searchBarFilter: string;
  setSearchBarFilter: Dispatch<SetStateAction<boolean>>;
  institutionFilter: string[];
  setInstitutionFilter: Dispatch<SetStateAction<boolean>>;
};

export const StudentsTableContext = createContext({
  updateModal: false,
  setUpdateModal: (a: any) => a,
  searchBarFilter: "",
  setSearchBarFilter: (a: any) => a,
  institutionFilter: [],
  setInstitutionFilter: (a: any) => a,
});

export function StudentsTableContextProvider({ children }: { children: any }) {
  const [updateModal, setUpdateModal] = useState(false);
  const [searchBarFilter, setSearchBarFilter] = useState("");
  const [institutionFilter, setInstitutionFilter] = useState([]);
  const [levelFilter, setLevelFilter] = useState(0);

  return (
    <StudentsTableContext.Provider
      value={{
        updateModal,
        setUpdateModal,
        searchBarFilter,
        setSearchBarFilter,
        institutionFilter,
        setInstitutionFilter,
      }}
    >
      {children}
    </StudentsTableContext.Provider>
  );
}
