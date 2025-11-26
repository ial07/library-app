// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./pages/Auth/AuthPage";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/Home/HomePage";
import PublicRoute from "./routes/PublicRoute";
import DetailPage from "./pages/Details/DetailPage";
import CategoryPage from "./pages/Category/CategoryPage";
import BookByAuthorPage from "./pages/BookByAuthor/BookByAuthorPage";
import CartPage from "./pages/Cart/CartPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth"
          element={
            <PublicRoute>
              <AuthPage />
            </PublicRoute>
          }
        />

        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<DetailPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/bookbyauthor/:id" element={<BookByAuthorPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
