import React from "react";

import "./App.css";
import Router from "./routes";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer />
        <div className="App">
          <Header />
          <Router />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
