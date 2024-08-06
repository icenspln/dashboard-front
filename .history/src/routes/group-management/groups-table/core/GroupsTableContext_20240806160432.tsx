import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { createContext } from "react";

type GroupsTableContext = {
  updateModal: boolean;
  setUpdateModal: Dispatch<SetStateAction<boolean>>;
  filterState: {
    searchBar: string;
    institution: string[];
    modules: string[];
  };
  setFilterState: Dispatch<SetStateAction<any>>;
  filter: string;
  setFilter: Dispatch<SetStateAction<any>>;
};

export const GroupsTableContext = createContext({
  updateModal: false,
  setUpdateModal: (a: any) => a,
  filterState: {
    searchBar: "",
    institution: [""],
    level: [],
    modules: [],
  },
  setFilterState: (a: any) => a,
  filter: "",
  setFilter: (a: any) => a,
});

export function GroupsTableContextProvider({ children }: { children: any }) {
  const [updateModal, setUpdateModal] = useState(false);
  const [filter, setFilter] = useState("");
  const [filterState, setFilterState] = useState({
    searchBar: "",
    institution: [""],
    level: [],
    modules:[],
  });

  useEffect(() => {
    let institution = `institution=${filterState.institution.join(",")}`;
    let search = `search=${filterState.searchBar}`;
    let level = `level=${filterState.level.join(",")}`;
    let modules = `level=${filterState.modules.join(",")}`;
    let url = "";
    if (filterState.searchBar != "") url += search;
    if (filterState.institution.length > 0) url += "&" + institution;
    if (filterState.level.length > 0) url += "&" + level;
    if (filterState.modules.length > 0) url += "&" + modules;
    setFilter(url);
    console.log("triggered", url);
  }, [filterState]);
  return (
    <GroupsTableContext.Provider
      value={{
        updateModal,
        setUpdateModal,
        filterState,
        setFilterState,
        filter,
        setFilter,
      }}
    >
      {children}
    </GroupsTableContext.Provider>
  );
}
