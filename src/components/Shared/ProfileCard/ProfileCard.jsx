import { useContext } from "react";
import { allIconsData } from "../../../data/all-icons-data";
import { AuthContext } from "../../../provider/authProviders";

const ProfileCard = ({ handleLogout }) => {
  const { user } = useContext(AuthContext);
  const { profile, setting, update, logout } = allIconsData;

  return (
    <div className=" text-secondary bg-tertiary py-8 px-4  w-[400px] rounded-xl">
      <div className="  flex items-center gap-4 mb-10 p-3 rounded bg-icon bg-opacity-15">
        <div className=" text-4xl">{profile}</div>
        <h1 className=" text-xl font-bold">{user.displayName}</h1>
      </div>
      <div className=" my-4 flex flex-col gap-3">
        <div className=" flex items-center gap-2 p-2 rounded hover:bg-icon hover:bg-opacity-15 cursor-pointer">
          <div className=" text-2xl p-1 bg-tertiary rounded-full">
            {setting}
          </div>
          <h1 className=" text-lg font-bold">Settings</h1>
        </div>
        <div className=" flex items-center gap-2 p-2 rounded hover:bg-icon hover:bg-opacity-15 cursor-pointer">
          <div className=" text-2xl p-1 bg-tertiary rounded-full">{update}</div>
          <h1 className=" text-lg font-bold">Update Profile</h1>
        </div>
        <div
          onClick={handleLogout}
          className=" flex items-center gap-2 p-2 rounded hover:bg-icon hover:bg-opacity-15 cursor-pointer"
        >
          <div className=" text-2xl p-1 bg-tertiary rounded-full">{logout}</div>
          <h1 className=" text-lg font-bold">Logout</h1>
        </div>
      </div>
      <div className=" mt-5 text-xs text-center">
        <p>
          Bookswap <span>&copy;</span> 2024
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
