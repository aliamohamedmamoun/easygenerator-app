import React, { useContext, JSX } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { APP_ROUTES } from "../constants/routes";

const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const { isLoggedIn } = useContext(AuthContext);
  if (isLoggedIn) {
    return <Navigate to={APP_ROUTES.HOME} replace />;
  }

  return children;
};
export default PublicRoute;
