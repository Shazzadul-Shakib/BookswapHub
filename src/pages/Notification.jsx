import { useContext } from "react";
import { AuthContext } from "../provider/authProviders";
import { useGetUserBorrowedBooksQuery } from "../redux/api/users-api";
import ModalBody from "../components/Shared/ModalBody/ModalBody";
import Loader from "../components/Shared/Loader/Loader";
import NotificationCard from "../components/Cards/NotificationCard";

const Notification = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading } = useGetUserBorrowedBooksQuery(user.email);
  if (isLoading) {
    return <ModalBody modal={<Loader />} />;
  }
  const userNotification = data?.data[0]?.userNotification;

  return (
    <main className="w-full md:w-[90%] lg:w-[70%] h-[85dvh] mx-auto my-6 overflow-y-auto custom-scrollbar">
      {userNotification.map((notification) => (
        <NotificationCard key={notification._id} notification={notification} />
      ))}
    </main>
  );
};

export default Notification;
