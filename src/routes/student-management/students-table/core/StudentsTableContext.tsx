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
  editCardModal: boolean;
  setEditCardModal: Dispatch<SetStateAction<boolean>>;
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
  editCardModal: false,
  setEditCardModal: () => {},
});

export function StudentsTableContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [editCardModal, setEditCardModal] = useState<boolean>(false);
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
    const institution = `institution=${filterState.institution.join(",")}`;
    const search = `search=${filterState.searchBar}`;
    const level = `level=${filterState.level.join(",")}`;
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
        editCardModal,
        setEditCardModal,
      }}
    >
      {children}
    </StudentsTableContext.Provider>
  );
}
