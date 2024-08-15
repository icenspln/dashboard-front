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

  console.log(filterState);

  useEffect(() => {
    let months = `month=${filterState.months.join(",")}`;
    let years = `year=${filterState.years.join(",")}`;
    let url = "";
    if (filterState.months.length > 0) {
      if (url) url += "&" + months;
      if (!url) url += months;
    }
    if (filterState.years.length > 0) {
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
