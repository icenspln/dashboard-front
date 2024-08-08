import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { createContext } from "react";
import { Student } from "./_models";

export type StudentState = Student | null;

type StudentsTableContext = {
  filterState: {
    searchBar: string;
    institution: string[];
    level: string[];
  };
  setFilterState: Dispatch<
    SetStateAction<{
      searchBar: string;
      institution: string[];
      level: string[];
    }>
  >;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  groupModal: boolean;
  setGroupModal: Dispatch<SetStateAction<boolean>>;
  selectedStudent: StudentState;
  setSelectedStudent: Dispatch<SetStateAction<StudentState>>;
};

export const StudentsTableContext = createContext<StudentsTableContext>({
  filterState: {
    searchBar: "",
    institution: [""],
    level: [],
  },
  setFilterState: () => {}, // Correctly typed empty function
  filter: "",
  setFilter: () => {}, // Correctly typed empty function
  groupModal: false,
  setGroupModal: () => {}, // Correctly typed empty function
  selectedStudent: null,
  setSelectedStudent: () => {}, // Correctly typed empty function
});

export function StudentsTableContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [filter, setFilter] = useState<string>("");
  const [filterState, setFilterState] = useState<{
    searchBar: string;
    institution: string[];
    level: string[];
  }>({
    searchBar: "",
    institution: [""],
    level: [],
  });

  const [groupModal, setGroupModal] = useState<boolean>(false);

  useEffect(() => {
    let institution = `institution=${filterState.institution.join(",")}`;
    let search = `search=${filterState.searchBar}`;
    let level = `level=${filterState.level.join(",")}`;
    let url = "";
    if (filterState.searchBar != "") url += search;
    if (filterState.institution.length > 0) url += "&" + institution;
    if (filterState.level.length > 0) url += "&" + level;
    setFilter(url);
  }, [filterState]);

  const [selectedStudent, setSelectedStudent] = useState<StudentState>(null);

  return (
    <StudentsTableContext.Provider
      value={{
        filterState,
        setFilterState,
        setFilter,
        filter,
        groupModal,
        selectedStudent,
        setSelectedStudent,
        setGroupModal,
      }}
    >
      {children}
    </StudentsTableContext.Provider>
  );
}
