import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/authProviders";
import Loader from "../components/Shared/Loader/Loader";
import ModalBody from "../components/Shared/ModalBody/ModalBody";
import LoaderModalBody from "../components/Shared/ModalBody/LoaderModalBody";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <LoaderModalBody modal={<Loader />} />;
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
