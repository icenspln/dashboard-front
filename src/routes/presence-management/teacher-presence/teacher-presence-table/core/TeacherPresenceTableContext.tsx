import {
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react"
import { createContext } from "react"
import { useLocation } from "react-router-dom"

type teacherPresenceTableContext = {
    filterState: { month: string[]; year: string[] }
    setFilterState: Dispatch<
        SetStateAction<{ month: string[]; year: string[] }>
    >
    filter: string
    setFilter: Dispatch<SetStateAction<string>>
}

export const teacherpresenceTableContext =
    createContext<teacherPresenceTableContext>({
        filterState: {
            year: [""],
            month: [""],
        },
        setFilterState: () => {},
        filter: "",
        setFilter: () => {},
    })

export function TeacherPresenceTableContextProvider({
    children,
}: {
    children: ReactNode
}) {
    const [filter, setFilter] = useState<string>("")

    function useQuery() {
        const { hash } = useLocation()
        const queryString = hash.split("?")[1] || ""
        return new URLSearchParams(queryString)
    }

    const query = useQuery()
    const month = query.get("month") as any
    const year = query.get("year") as any

    // const { month, year } = queryString.parse(location.search) as any
    const [filterState, setFilterState] = useState<{
        year: string[]
        month: string[]
    }>({
        month: month,
        year: year,
    })

    useEffect(() => {
        if (month && year) {
            setFilterState({
                month: month,
                year: year,
            })
        }
    }, [])
    useEffect(() => {
        const month = `month=${filterState.month}`
        const year = `year=${filterState.year}`
        let url = ""
        if (filterState.month) {
            if (url) url += "&" + month
            if (!url) url += month
        }
        if (filterState.year) {
            if (url) url += "&" + year
            if (!url) url += year
        }

        setFilter(url)
    }, [filterState])

    return (
        <teacherpresenceTableContext.Provider
            value={{
                filterState,
                setFilterState,
                setFilter,
                filter,
            }}
        >
            {children}
        </teacherpresenceTableContext.Provider>
    )
}

export const useTeacherPresenceContext = () => {
    const context = useContext(teacherpresenceTableContext)
    if (context) return context
    return {}
}
