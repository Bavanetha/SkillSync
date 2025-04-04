import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ user }) => {
  return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
