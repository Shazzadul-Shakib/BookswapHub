import { useContext, useEffect, useState } from "react";
import { allIconsData } from "../../data/all-icons-data";
import Divider from "../Shared/Divider/Divider";
import { AuthContext } from "../../provider/authProviders";
import { useNavigate } from "react-router-dom";
import {
  useAddUserMutation,
  useLoginUserMutation,
} from "../../redux/api/users-api";
import { toast } from "react-toastify";
import { getAuth, getRedirectResult } from "firebase/auth";
import ModalBody from "../Shared/ModalBody/ModalBody";
import Loader from "../Shared/Loader/Loader";

const SocialLogin = () => {
  const navigate = useNavigate();
  const { google } = allIconsData;
  const { googlelogin, user } = useContext(AuthContext);
  const [addUser] = useAddUserMutation();
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const handleLogin = async () => {
      setShowLoader(true);
      const auth = getAuth();
      try {
        const result = await getRedirectResult(auth);
        if (result.user) {
          const { displayName, email, photoURL } = result.user;
          const userName = displayName;
          const userEmail = email;
          const userImage = photoURL;
          const User = { userName, userEmail, userImage };
          await addUser(User);
          const userCredentials = { userEmail: result.user.email };
          await loginUser(userCredentials);
          toast.success("Logged in successfully");
          navigate("/");
        }
      } catch (error) {
        console.error("Error during Google sign-in redirect:", error);
      } finally {
        setShowLoader(false);
      }
    };

    handleLogin();
  }, [addUser, loginUser, navigate]);

  // Handle social login
  const handleGoogleSignIn = async () => {
    setShowLoader(true);
    await googlelogin();
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  if (isLoading || showLoader) {
    return <ModalBody modal={<Loader />} />;
  }

  return (
    <main>
      <Divider />
      {/* Social Icons */}
      <div className="flex justify-center items-center gap-5">
        <div
          onClick={handleGoogleSignIn}
          className="text-2xl cursor-pointer text-secondary"
        >
          {google}
        </div>
      </div>
    </main>
  );
};

export default SocialLogin;
