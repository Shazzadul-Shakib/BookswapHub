import { Link } from "react-router-dom";
import { allIconsData } from "../../../data/all-icons-data";

const BottomNavbar = () => {
  const { home, add, bookmark, borrowedbook, notification } = allIconsData;
  return (
    <div>
      <div className="flex justify-around items-center p-3 text-3xl text-icon bg-tertiary w-[100vw] ">
        <Link to="/" className="text-secondary">
          {home}
        </Link>
        <Link to="/addbook">{add}</Link>
        <Link to="/">{bookmark}</Link>
        <Link to="/borrowedbook">{borrowedbook}</Link>
        <Link to="/notification">{notification}</Link>
      </div>
    </div>
  );
};

export default BottomNavbar;
