import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { createContext } from "react";

type GroupsTableContext = {
  filterState: { months: string[]; years: string[] };
  setFilterState: Dispatch<
    SetStateAction<{ months: string[]; years: string[] }>
  >;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
};

export const GroupsTableContext = createContext<GroupsTableContext>({
  filterState: {
    years: [""],
    months: [""],
  },
  setFilterState: () => {},
  filter: "",
  setFilter: () => {},
});

export function GroupsTableContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [filter, setFilter] = useState<string>("");

  const [filterState, setFilterState] = useState<{
    years: string[];
    months: string[];
  }>({
    years: [""],
    months: [""],
  });

  useEffect(() => {
    console.log("making url...");
    let months = `month=${filterState.months}`;
    let years = `year=${filterState.years}`;
    console.log(months, years);
    let url = "";
    if (filterState.months) {
      if (url) url += "&" + months;
      if (!url) url += months;
    }
    if (filterState.years) {
      if (url) url += "&" + years;
      if (!url) url += years;
    }

    setFilter(url);
  }, [filterState]);

  return (
    <GroupsTableContext.Provider
      value={{
        filterState,
        setFilterState,
        setFilter,
        filter,
      }}
    >
      {children}
    </GroupsTableContext.Provider>
  );
}
