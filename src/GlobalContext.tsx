import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { createContext } from "react";
import { Teacher } from "./routes/teacher-management/teacher-table/core/_models";
import { AttendanceForTeacherGroupType } from "./routes/presence-management/teacher-presence/teacher-presence-table/core/_models";

export const GlobalContext = createContext<{
  teacher: Teacher | object;
  setTeacher: Dispatch<SetStateAction<Teacher>>;
  groups: AttendanceForTeacherGroupType[];
  setGroups: Dispatch<SetStateAction<AttendanceForTeacherGroupType[]>>;
}>({ teacher: {}, groups: [], setTeacher: () => {}, setGroups: () => {} });

export function GlobalContexProvider({ children }: { children: ReactNode }) {
  const [groups, setGroups] = useState<AttendanceForTeacherGroupType[]>([]);
  const [teacher, setTeacher] = useState({});

  return (
    <GlobalContext.Provider value={{ groups, teacher, setGroups, setTeacher }}>
      {children}
    </GlobalContext.Provider>
  );
}
