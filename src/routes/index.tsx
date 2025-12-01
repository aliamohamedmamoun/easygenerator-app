import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";
import { APP_ROUTES } from "../constants/routes";
import Home from "../pages/home";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

export default function Router() {
  return (
    <Routes>
      <Route
        path={APP_ROUTES.SIGN_IN}
        element={
          <PublicRoute>
            <SignIn />
          </PublicRoute>
        }
      />
      <Route
        path={APP_ROUTES.SIGN_UP}
        element={
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        }
      />
      <Route
        path={APP_ROUTES.HOME}
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
