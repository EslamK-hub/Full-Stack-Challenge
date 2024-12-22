import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/app/store';
import { Navigate } from 'react-router-dom';

interface RequireAuthProps {
    children: React.ReactNode;
}
  
function RequireAuth({ children }: RequireAuthProps) {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/" />;
};

export default RequireAuth;
