import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { PresenceList } from "./_models";
import { getAttendeesForEmployee } from "./_request";

interface EmployeePresenceContextProps {
  presenceListData: PresenceList | null;
}

const EmployeePresenceContext = createContext<
  EmployeePresenceContextProps | undefined
>(undefined);

interface EmployeePresenceProviderProps {
  children: ReactNode;
  id: string;
}

export const EmployeePresenceProvider = ({
  children,
  id,
}: EmployeePresenceProviderProps) => {
  const [presenceListData, setPresenceListData] = useState<PresenceList | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAttendeesForEmployee(id);
        setPresenceListData(data);
      } catch (error) {
        console.error("Error fetching employee presence data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <EmployeePresenceContext.Provider value={{ presenceListData }}>
      {children}
    </EmployeePresenceContext.Provider>
  );
};

export const useEmployeePresence = () => {
  const context = useContext(EmployeePresenceContext);
  if (!context) {
    throw new Error(
      "useEmployeePresence must be used within an EmployeePresenceProvider"
    );
  }
  return context;
};
