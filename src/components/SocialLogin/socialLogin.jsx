import { useContext } from "react";
import { allIconsData } from "../../data/all-icons-data";
import Divider from "../Shared/Divider/Divider";
import { AuthContext } from "../../provider/authProviders";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const { google } = allIconsData;
  const { googlelogin } = useContext(AuthContext);

  const handleGoogleSignIn = async () => {
    await googlelogin().then(() => {
      navigate("/");
    });
  };
  return (
    <div>
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
    </div>
  );
};

export default SocialLogin;
