import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/authProviders";
import Loader from "../components/Shared/Loader/Loader";
import ModalBody from "../components/Shared/ModalBody/ModalBody";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <ModalBody modal={<Loader />} />;
  }

  if (user && user.emailVerified) {
    return children;
  }

  return (
    <main>
      <Navigate to="/login" />
    </main>
  );
};

export default PrivateRoute;
