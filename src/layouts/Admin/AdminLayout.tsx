import React from "react";
import AdminSideBar from "../../components/AdminSideBar/AdminSideBar";
import { Outlet } from "react-router-dom";

const AdminLayout: React.FC = () => {
  return (
    <>
      <AdminSideBar />
      <div className="p-4 sm:ml-64">
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
