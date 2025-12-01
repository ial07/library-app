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
import ScrollToTop from "./lib/ScrollToTop";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import SuccessAlertPage from "./pages/Alert/SuccessAlertPage";
import SettingPage from "./pages/Settings/SettingPage";
import PrivateRoute from "./routes/PrivateRoute";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <CartPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <CheckoutPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/success"
            element={
              <PrivateRoute>
                <SuccessAlertPage returnDate="" />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <SettingPage />
              </PrivateRoute>
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
