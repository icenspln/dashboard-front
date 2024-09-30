import {
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react";
import { createContext } from "react";
import { Teacher } from "./_models";

type teacherState = Teacher | null;

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
    paymentCheckModal: boolean;
    setPaymentCheckModal: Dispatch<SetStateAction<boolean>>;
    teacher: teacherState;
    setTeacher: Dispatch<SetStateAction<teacherState>>;
};

export const TeachersTableContext = createContext<TeachersTableContext>({
    filterState: {
        searchBar: "",
    },
    setFilterState: () => {}, // Correctly typed empty function
    filter: "",
    setFilter: () => {}, // Correctly typed empty function
    paymentCheckModal: false,
    setPaymentCheckModal: () => {},
    teacher: null,
    setTeacher: () => {},
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
        const search = `search=${filterState.searchBar}`;
        let url = "";
        if (filterState.searchBar != "") url += search;

        setFilter(url);
    }, [filterState]);

    const [paymentCheckModal, setPaymentCheckModal] = useState(false);
    const [teacher, setTeacher] = useState<teacherState>(null);

    return (
        <TeachersTableContext.Provider
            value={{
                filterState,
                setFilterState,
                setFilter,
                filter,
                paymentCheckModal,
                setPaymentCheckModal,
                teacher,
                setTeacher,
            }}
        >
            {children}
        </TeachersTableContext.Provider>
    );
}

export function useTeacherTable() {
    return useContext(TeachersTableContext);
}
