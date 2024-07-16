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
import ProfManagement from "./routes/prof-management/ProfManagement.tsx";
import StudentRegister from "./routes/student-management/students-register/StudentRegister.tsx";

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
