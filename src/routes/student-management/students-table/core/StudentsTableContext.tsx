import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { createContext } from "react";
import { Student } from "./_models";

type StudentsTableContext = {
  updateModal: boolean;
  setUpdateModal: Dispatch<SetStateAction<boolean>>;
  filterState: {
    searchBar: string;
    institution: string[];
  };
  setFilterState: Dispatch<SetStateAction<any>>;
  filter: string;
  setFilter: Dispatch<SetStateAction<any>>;
  groupModal: boolean;
  setGroupModal: Dispatch<SetStateAction<any>>;
  selectedStudent: Student | undefined;
  setSelectedStudent: Dispatch<SetStateAction<any>>;
};

export const StudentsTableContext = createContext({
  updateModal: false,
  setUpdateModal: (a: any) => a,
  filterState: {
    searchBar: "",
    institution: [""],
    level: [],
  },
  setFilterState: (a: any) => a,
  filter: "",
  setFilter: (a: any) => a,
  groupModal: false,
  setGroupModal: (a: any) => a,
  selectedStudent: undefined,
  setSelectedStudent: (a: any) => a,
});

export function StudentsTableContextProvider({ children }: { children: any }) {
  const [updateModal, setUpdateModal] = useState(false);
  const [filter, setFilter] = useState("");
  const [filterState, setFilterState] = useState({
    searchBar: "",
    institution: [""],
    level: [],
  });

  const [selectedStudent, setSelectedStudent] = useState();
  const [groupModal, setGroupModal] = useState(false);

  useEffect(() => {
    let institution = `institution=${filterState.institution.join(",")}`;
    let search = `search=${filterState.searchBar}`;
    let level = `level=${filterState.level.join(",")}`;
    let url = "";
    if (filterState.searchBar != "") url += search;
    if (filterState.institution.length > 0) url += "&" + institution;
    if (filterState.level.length > 0) url += "&" + level;
    setFilter(url);
    console.log("triggered", url);
  }, [filterState]);
  return (
    <StudentsTableContext.Provider
      value={{
        updateModal,
        setUpdateModal,
        filterState,
        setFilterState,
        filter,
        setFilter,
        selectedStudent,
        setSelectedStudent,
        groupModal,
        setGroupModal,
      }}
    >
      {children}
    </StudentsTableContext.Provider>
  );
}
