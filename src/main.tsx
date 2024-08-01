import { Toaster } from "react-hot-toast";
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
import PresenceListsManagement from "./routes/presence-management/PresenceManagement.tsx";
import PaymentManagement from "./routes/teacher-payment-management/PaymentManagement.tsx";
import AttendanceManagement from "./routes/attendance-register/AttendanceManagement.tsx";
import TablesContainer from "./routes/attendance-register/Attendance-table/tablesContainer.tsx";
import SeetingManagement from "./routes/settings/SettingManagement.tsx";

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
          path: "/presencemanagement",
          element: <PresenceListsManagement />,
        },
        {
          path: "/paymentmanagement",
          element: <PaymentManagement />,
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
      <Toaster />
    </QueryClientProvider>
  </React.StrictMode>
);
