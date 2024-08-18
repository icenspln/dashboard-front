import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { createContext } from "react";
import { Group } from "./_models";

export type GroupState = Group | null;

type GroupsTableContext = {
  filterState: {
    searchBar: string;
    institution: string[];
    level: string[];
    modules: string[];
    dayOfWeek: string[];
  };
  setFilterState: Dispatch<
    SetStateAction<{
      searchBar: string;
      institution: string[];
      level: string[];
      modules: string[];
      dayOfWeek: string[];
    }>
  >;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  groupModal: boolean;
  setGroupModal: Dispatch<SetStateAction<boolean>>;
  selectedGroup: GroupState;
  setSelectedGroup: Dispatch<SetStateAction<GroupState>>;
  triggerNewData: boolean;
  setTriggerNewData: Dispatch<SetStateAction<boolean>>;
  additionalDayModal: boolean;
  setAdditionalDayModal: Dispatch<SetStateAction<boolean>>;
};

export const GroupsTableContext = createContext<GroupsTableContext>({
  filterState: {
    searchBar: "",
    institution: [""],
    level: [],
    modules: [],
    dayOfWeek: [],
  },
  setFilterState: () => {}, // Correctly typed empty function
  filter: "",
  setFilter: () => {}, // Correctly typed empty function
  groupModal: false,
  setGroupModal: () => {}, // Correctly typed empty function
  selectedGroup: null,
  setSelectedGroup: () => {}, // Correctly typed empty function
  triggerNewData: false,
  setTriggerNewData: () => {},
  additionalDayModal: false,
  setAdditionalDayModal: () => {},
});

export function GroupsTableContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [filter, setFilter] = useState<string>("");
  const [additionalDayModal, setAdditionalDayModal] = useState<boolean>(false);

  const [filterState, setFilterState] = useState<{
    searchBar: string;
    institution: string[];
    level: string[];
    modules: string[];
    dayOfWeek: string[];
  }>({
    searchBar: "",
    institution: [""],
    level: [],
    modules: [],
    dayOfWeek: [],
  });

  const [groupModal, setGroupModal] = useState<boolean>(false);

  useEffect(() => {
    const institution = `institution=${filterState.institution.join(",")}`;
    const search = `search=${filterState.searchBar}`;
    const level = `level=${filterState.level.join(",")}`;
    const modules = `modules=${filterState.modules.join(",")}`;
    const dayOfWeek = `dayOfWeek=${filterState.dayOfWeek.join(",")}`;
    let url = "";
    if (filterState.searchBar != "") url += search;
    if (filterState.institution.length > 0) url += "&" + institution;
    if (filterState.level.length > 0) url += "&" + level;
    if (filterState.modules.length > 0) url += "&" + modules;
    if (filterState.dayOfWeek.length > 0) url += "&" + dayOfWeek;

    setFilter(url);
  }, [filterState]);

  const [selectedGroup, setSelectedGroup] = useState<GroupState>(null);
  const [triggerNewData, setTriggerNewData] = useState(false);
  return (
    <GroupsTableContext.Provider
      value={{
        additionalDayModal,
        setAdditionalDayModal,
        triggerNewData,
        setTriggerNewData,
        filterState,
        setFilterState,
        setFilter,
        filter,
        groupModal,
        selectedGroup,
        setSelectedGroup,
        setGroupModal,
      }}
    >
      {children}
    </GroupsTableContext.Provider>
  );
}
