import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from '../pages/signin';
import SignUp from '../pages/signup';
import { APP_ROUTES } from '../constants/routes';
import Home from '../pages/home';

export default function Router() {
  return (
    <Routes>
      <Route path={APP_ROUTES.SIGN_IN} element={<SignIn />} />
      <Route path={APP_ROUTES.SIGN_UP} element={<SignUp />} />
      <Route path={APP_ROUTES.HOME} element={<Home />} />
    </Routes>
  );
}
