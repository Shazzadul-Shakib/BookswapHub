import { allIconsData } from "../../data/all-icons-data";
import Divider from "../Shared/Divider/Divider";

const SocialLogin = () => {
    const { google, facebook } = allIconsData;
    return (
      <div>
        <Divider />
        {/* Social Icons */}
        <div className=" flex justify-center items-center gap-5">
          <div className="text-2xl text-secondary">{google}</div>
          <div className="text-2xl text-secondary">{facebook}</div>
        </div>
      </div>
    );
};

export default SocialLogin;