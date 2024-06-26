import { Link, useLocation } from "react-router-dom";
import { allIconsData } from "../../../data/all-icons-data";
import { useContext } from "react";
import { useGetUserBorrowedBooksQuery } from "../../../redux/api/users-api";
import { AuthContext } from "../../../provider/authProviders";
import ModalBody from "../ModalBody/ModalBody";
import Loader from "../Loader/Loader";
import LoaderModalBody from "../ModalBody/LoaderModalBody";

const BottomNavbar = () => {
  const { home, add, bookmark, borrowedbook, notification } = allIconsData;
  const { user } = useContext(AuthContext);
  const { data, isLoading } = useGetUserBorrowedBooksQuery(user.email);
  const location = useLocation();

  // Get active links path and set classname for them
  const getLinkClass = (path) =>
    location.pathname === path ? "text-secondary" : "text-icon";

  return (
    <main>
      <div className="flex justify-around items-center p-3 text-3xl bg-tertiary w-[100vw]">
        <Link to="/" className={getLinkClass("/")}>
          {home}
        </Link>
        <Link to="/addbook" className={getLinkClass("/addbook")}>
          {add}
        </Link>
        <Link to="/bookmark" className={getLinkClass("/bookmark")}>
          {bookmark}
        </Link>
        <Link to="/borrowedbook" className={getLinkClass("/borrowedbook")}>
          {borrowedbook}
        </Link>
        <Link
          to="/notification"
          className={`relative ${getLinkClass("/notification")}`}
        >
          {notification}
          <p
            className={`absolute top-0 -mt-1 flex items-center justify-center text-[10px] text-secondary h-[13px] w-[13px] bg-accent rounded-full ${
              data?.data[0]?.userNotification?.length === 0 ? "hidden" : ""
            }`}
          >
            {data?.data[0]?.userNotification?.length}
          </p>
        </Link>
      </div>

      {/* Loader spinner if loading */}
      {isLoading && <LoaderModalBody modal={<Loader />} />}
    </main>
  );
};

export default BottomNavbar;
