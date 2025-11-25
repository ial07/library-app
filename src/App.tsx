// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./pages/Auth/AuthPage";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/Home/HomePage";
import PublicRoute from "./routes/PublicRoute";
import DetailPage from "./pages/Details/DetailPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <AuthPage />
            </PublicRoute>
          }
        />

        <Route element={<MainLayout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="/details/:id" element={<DetailPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
