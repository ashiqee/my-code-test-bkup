import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Players from "../pages/All_Players/Players";
import Registration from "../pages/Authentication/Registration/Registration";
import Home from "../pages/Home";
import Schedule from "../pages/Schedule/Schedule";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "Players",
        element: <Players />,
        loader: () => fetch("employee_data.json"),
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
    ],
  },
]);

export default router;
