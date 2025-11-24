// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";
import AuthPage from "./pages/Auth/AuthPage";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/Home/HomePage";

const App: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to="/home" /> : <AuthPage />}
        />

        <Route path="/" element={token ? <MainLayout /> : <Navigate to="/" />}>
          <Route path="home" element={<HomePage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
