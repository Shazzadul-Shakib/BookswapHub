import { useContext } from "react";
import { allIconsData } from "../../data/all-icons-data";
import Divider from "../Shared/Divider/Divider";
import { AuthContext } from "../../provider/authProviders";
import { useNavigate } from "react-router-dom";
import { useAddUserMutation, useLoginUserMutation } from "../../redux/api/users-api";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const navigate = useNavigate();
  const { google } = allIconsData;
  const { googlelogin } = useContext(AuthContext);
  const [addUser] = useAddUserMutation();
  const [loginUser, { isLoading, error }] = useLoginUserMutation();

  // Handle social login
  const handleGoogleSignIn = async () => {
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
  };
  return (
    <main>
      <Divider />
      {/* Social Icons */}
      <div className=" flex justify-center items-center gap-5">
        <div
          onClick={() => handleGoogleSignIn()}
          className="text-2xl cursor-pointer text-secondary"
        >
          {google}
        </div>
      </div>
    </main>
  );
};

export default SocialLogin;
