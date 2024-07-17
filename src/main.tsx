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
import ProfManagement from "./routes/prof-management/ProfManagement.js";
import GroupManagement from "./routes/group-management/GroupManagement.tsx";
import ParticularGroupManagement from "./routes/particular-group-management/ParticularGroupManagement.tsx";

import StudentRegister from "./routes/student-management/students-register/StudentRegister.tsx";
import ProfRegister from "./routes/prof-management/profs-register/ProfRegister.tsx";
import GroupRegister from "./routes/group-management/groups-register/GroupRegister.tsx";
import ParticularGroupRegister from "./routes/particular-group-management/particular-groups-register/ParticularGroupRegister.tsx";

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
          path: "/profmanagement",
          element: <ProfManagement />,
        },
        {
          path: "/profmanagement/new",
          element: <ProfRegister />,
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
      ],
    },
  ],
  {}
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
