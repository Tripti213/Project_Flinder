import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from './UserContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useUser();

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute; 