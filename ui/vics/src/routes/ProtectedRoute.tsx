import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const isAuthenticated = useSelector(
    (state) => state.login.response.isSuccess
  );

  const clientip = JSON.parse(localStorage.getItem("clientip") || "{}");
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={`/?clientip=${clientip}`} />
  );
}

export default ProtectedRoute;
