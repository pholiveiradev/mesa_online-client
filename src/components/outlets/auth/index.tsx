import { ROUTES } from "../../../utils";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const AuthOutlet = () => {
  const { pathname } = useLocation();

  if (pathname === ROUTES.AUTH.BASE) {
    return <Navigate to={ROUTES.AUTH.SIGN_IN} />;
  }

  return <Outlet />;
};
