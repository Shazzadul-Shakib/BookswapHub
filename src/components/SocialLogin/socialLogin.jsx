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
import ModalBody from "../Shared/ModalBody/ModalBody";
import Loader from "../Shared/Loader/Loader";
import LoaderModalBody from "../Shared/ModalBody/LoaderModalBody";

const SocialLogin = () => {
  const navigate = useNavigate();
  const { google } = allIconsData;
  const { googlelogin } = useContext(AuthContext);
  const [addUser] = useAddUserMutation();
  const [loginUser, { isLoading ,error}] = useLoginUserMutation();
  const [showLoader, setShowLoader] = useState(false);

  // Handle social login
  const handleGoogleSignIn = async () => {
    setShowLoader(true); // Set showLoader to true when submitting

    try {
      await googlelogin().then(async (res) => {
        const { displayName, email, photoURL } = res.user;
        const userName = displayName;
        const userEmail = email;
        const userImage = photoURL;
        const User = { userName, userEmail, userImage };
        await addUser(User);
        const userCredentials = { userEmail: res.user.email };
        await loginUser(userCredentials);
        navigate("/");
        toast.success("Logged in successfully");
      });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setShowLoader(false); // Set showLoader back to false after login attempt
    }
  };

  if (isLoading || showLoader) {
    return <LoaderModalBody modal={<Loader />} />;
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
