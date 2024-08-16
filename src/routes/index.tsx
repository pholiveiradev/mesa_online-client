import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../utils";
import { AuthOutlet } from "../components/outlets/auth";
import { AuthSignIn } from "../pages";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Navigate to={ROUTES.AUTH.SIGN_IN} />,
  },
  {
    path: ROUTES.AUTH.BASE,
    element: <AuthOutlet />,
    children: [
      {
        path: ROUTES.AUTH.SIGN_IN,
        element: <AuthSignIn />,
      },
    ],
  },
]);
