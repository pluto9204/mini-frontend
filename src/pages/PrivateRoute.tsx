import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const token = localStorage.getItem('token'); // 또는 쿠키에서 읽기
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
