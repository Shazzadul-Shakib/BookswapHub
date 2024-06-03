import { Link } from "react-router-dom";
import { allIconsData } from "../../../data/all-icons-data";
import { useContext } from "react";
import { useGetUserBorrowedBooksQuery } from "../../../redux/api/users-api";
import { AuthContext } from "../../../provider/authProviders";
import ModalBody from "../ModalBody/ModalBody";
import Loader from "../Loader/Loader";

const BottomNavbar = () => {
  const { home, add, bookmark, borrowedbook, notification } = allIconsData;
  const { user } = useContext(AuthContext);
  const { data, isLoading } = useGetUserBorrowedBooksQuery(user.email);
  
  return (
    <div>
      <div className="flex justify-around items-center p-3 text-3xl text-icon bg-tertiary w-[100vw] ">
        <Link to="/" className="text-secondary">
          {home}
        </Link>
        <Link to="/addbook">{add}</Link>
        <Link to="/">{bookmark}</Link>
        <Link to="/borrowedbook">{borrowedbook}</Link>
        <Link to="/notification" className=" relative text-icon">
          {notification}
          <p
            className={`absolute top-0 -mt-1  flex items-center justify-center text-[10px] text-secondary h-[13px] w-[13px] bg-accent rounded-full ${
              data?.data[0]?.userNotification?.length === 0 ? "hidden" : ""
            }`}
          >
            {data?.data[0]?.userNotification?.length}
          </p>
        </Link>
      </div>
      {isLoading && <ModalBody modal={<Loader />} />}
    </div>
  );
};

export default BottomNavbar;
