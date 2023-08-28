import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../layouts/Auth/Auth";
import UserLayout from "../layouts/User/UserLayout";
import AdminLayout from "../layouts/Admin/AdminLayout";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import HomePage from "../pages/Home/HomePage";
import ProductDetailPage from "../pages/ProductDetail/ProductDetailPage";
import CartPage from "../pages/Cart/CartPage";
import DashBoardPage from "../pages/DashBoard/DashBoardPage";
import ManageProductPage from "../pages/ManageProduct/ManageProduct";
import NotFound from "../pages/NotFound";

const AppRoute: React.FC = () => {
  return (
    <Routes>
      {/* Layout Login */}
      <Route path="/auth" element={<Auth />}>
        <Route index element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      {/* Layout User */}
      <Route path="/" element={<UserLayout />}>
        <Route index element={<HomePage />} />
        <Route path="product/:id" element={<ProductDetailPage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
      {/* Layout Admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<DashBoardPage />} />
        <Route path="manageProduct" element={<ManageProductPage />} />
      </Route>
      {/* Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoute;
