import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react";
import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "./_requests";
import { Employee } from "./_models";

interface EmployeeContextType {
    employees: Employee[];
    isLoading: boolean;
    error: Error | null;
    editEmployeeCard: boolean;
    setEditEmployeeCard: Dispatch<SetStateAction<boolean>>;
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
}

const EmployeeContext = createContext<EmployeeContextType>({
    employees: [],
    isLoading: false,
    error: null,
    editEmployeeCard: false,
    setEditEmployeeCard: () => {},
    filterState: {
        searchBar: "",
    },
    setFilterState: () => {}, // Correctly typed empty function
    filter: "",
    setFilter: () => {}, // Correctly typed empty function
});

export const EmployeeProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [editEmployeeCard, setEditEmployeeCard] = useState<boolean>(false);

    const [filter, setFilter] = useState<string>("");
    const [filterState, setFilterState] = useState<{
        searchBar: string;
    }>({
        searchBar: "",
    });

    useEffect(() => {
        const search = `search=${filterState.searchBar}`;
        let url = "";
        if (filterState.searchBar != "") url += search;

        setFilter(url);
    }, [filterState]);

    const { data, isLoading, error } = useQuery({
        queryKey: ["getEmployees", filter],
        queryFn: () => getEmployees(),
    });

    const employees = data || [];
    return (
        <EmployeeContext.Provider
            value={{
                error,
                employees,
                isLoading,
                editEmployeeCard,
                setEditEmployeeCard,
                filterState,
                setFilterState,
                setFilter,
                filter,
            }}
        >
            {children}
        </EmployeeContext.Provider>
    );
};

export const useEmployeeContext = () => {
    const context = useContext(EmployeeContext);
    if (!context) {
        throw new Error(
            "useEmployeeContext must be used within an EmployeeProvider"
        );
    }
    return context;
};
