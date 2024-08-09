import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root/Root.tsx";
import StudentManagement from "./routes/student-management/StudentManagement.tsx";
import GroupManagement from "./routes/group-management/GroupManagement.tsx";
import ParticularGroupManagement from "./routes/particular-group-management/ParticularGroupManagement.tsx";
import StudentRegister from "./routes/student-management/students-register/StudentRegister.tsx";
import GroupRegister from "./routes/group-management/groups-register/GroupRegister.tsx";
import ParticularGroupRegister from "./routes/particular-group-management/particular-groups-register/ParticularGroupRegister.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import TeacherManagement from "./routes/teacher-management/TeacherManagement.js";
import TeacherRegister from "./routes/teacher-management/teacher-register/TeacherRegister.tsx";
import EmployeeManagement from "./routes/employee-management/EmployeeManagement.tsx";
import EmployeeRegister from "./routes/employee-management/employees-register/EmployeeRegister.tsx";
import ParticularGroupsPresenceListsManagement from "./routes/presence-management/particular-groups-presence/ParticularGroupsPresenceManagement.tsx";
import GroupsPresenceListsManagement from "./routes/presence-management/groups-presence/GroupsPresenceManagement.tsx";
import StudentsPresenceListsManagement from "./routes/presence-management/students-presence/StudentsPresenceManagement.tsx";
import EmployeePresenceListsManagement from "./routes/presence-management/employee-presence/EmployeesPresenceManagement.tsx";
import PaymentManagement from "./routes/teacher-payment-management/PaymentManagement.tsx";
import StudentPaymentHistory from "./routes/student-payment-history/StudentPaymentHistory.tsx";
import AttendanceManagement from "./routes/attendance-register/AttendanceManagement.tsx";
import  TablesContainer  from "./routes/attendance-register/Attendance-table/tablesContainer.tsx";
import SeetingManagement from "./routes/settings/SettingManagement.tsx";
import LoadingScreen from "./components/LoadingScreen.tsx";
const queryClient = new QueryClient();

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          loader: () => redirect("/studentmanagement"),
        },
        {
          path: "/studentmanagement",
          element: <StudentManagement />,
        },
        {
          path: "/studentmanagement/new",
          element: <StudentRegister />,
        },
        {
          path: "/teachermanagement",
          element: <TeacherManagement />,
        },
        {
          path: "/teachermanagement/new",
          element: <TeacherRegister />,
        },
        {
          path: "/groupmanagement",
          element: <GroupManagement />,
        },
        {
          path: "/groupmanagement/new",
          element: <GroupRegister />,
        },
        {
          path: "/particulargroupmanagement",
          element: <ParticularGroupManagement />,
        },
        {
          path: "/particulargroupmanagement/new",
          element: <ParticularGroupRegister />,
        },
        {
          path: "/employeemanagement",
          element: <EmployeeManagement />,
        },
        {
          path: "/employeemanagement/new",
          element: <EmployeeRegister />,
        },
        {
          path: "/particulargroupspresencemanagement",
          element: <ParticularGroupsPresenceListsManagement />,
        },
        {
          path: "/groupspresencemanagement",
          element: <GroupsPresenceListsManagement />,
        },
        {
          path: "/studentspresencemanagement",
          element: <StudentsPresenceListsManagement />,
        },
        {
          path: "/employeepresencemanagement",
          element: <EmployeePresenceListsManagement />,
        },
        {
          path: "/paymentmanagement",
          element: <PaymentManagement />,
        },
        {
          path: "/studentspaymenthistory",
          element: <StudentPaymentHistory />,
        },
        {
          path: "/settings",
          element: <SeetingManagement />,
        },
        {
          path: "/attendancemanagement",
          element: <AttendanceManagement />,
        },
        {
          path: "/test",
          element: <TablesContainer />,
        },
        
        
      ],
    },
  ],
  {}
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools
        position="bottom"
        buttonPosition="bottom-left"
        initialIsOpen={false}
      />
    </QueryClientProvider>
    <LoadingScreen/>
  </React.StrictMode>
);
