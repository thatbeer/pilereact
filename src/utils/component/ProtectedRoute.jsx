import { Navigate, Outlet } from 'react-router-dom';
import { useTokenStore } from '../../store/mecallApiStore';

export const ProtectedRoute = () => {
  

  const A_token = useTokenStore((state) => state.A_token)

  return A_token !== null
    ? <Outlet />
    : <Navigate to="/login" replace />;
};