import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "./_requests";
import { Employee } from "./_models";

interface EmployeeContextType {
  employees: Employee[];
  isLoading: boolean;
  editEmployeeCard: boolean;
  setEditEmployeeCard: Dispatch<SetStateAction<boolean>>;
}

const EmployeeContext = createContext<EmployeeContextType>({
  employees: [],
  isLoading: false,
  editEmployeeCard: false,
  setEditEmployeeCard: () => {},
});

export const EmployeeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ["getEmployees"],
    queryFn: getEmployees,
  });

  const employees = data || [];

  const [editEmployeeCard, setEditEmployeeCard] = useState<boolean>(false);

  return (
    <EmployeeContext.Provider
      value={{ employees, isLoading, editEmployeeCard, setEditEmployeeCard }}
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
