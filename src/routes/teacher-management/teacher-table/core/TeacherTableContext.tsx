import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { createContext } from "react";

type TeachersTableContext = {
  filterState: {
    searchBar: string;
  };
  setFilterState: Dispatch<
    SetStateAction<{
      searchBar: string;
    }>
  >;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
};

export const TeachersTableContext = createContext<TeachersTableContext>({
  filterState: {
    searchBar: "",
  },
  setFilterState: () => {}, // Correctly typed empty function
  filter: "",
  setFilter: () => {}, // Correctly typed empty function
});

export function TeachersTableContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [filter, setFilter] = useState<string>("");
  const [filterState, setFilterState] = useState<{
    searchBar: string;
  }>({
    searchBar: "",
  });

  useEffect(() => {
    let search = `search=${filterState.searchBar}`;
    let url = "";
    if (filterState.searchBar != "") url += search;

    setFilter(url);
  }, [filterState]);

  return (
    <TeachersTableContext.Provider
      value={{
        filterState,
        setFilterState,
        setFilter,
        filter,
      }}
    >
      {children}
    </TeachersTableContext.Provider>
  );
}
