import { Navigate } from 'react-router-dom';
import { useAuth } from './Authservies.jsx';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

//   if (loading) {
//     return <div>Loading...</div>;
//   }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute; 