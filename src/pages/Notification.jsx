import { useContext, useState } from "react";
import { AuthContext } from "../provider/authProviders";
import { useGetUserBorrowedBooksQuery } from "../redux/api/users-api";
import ModalBody from "../components/Shared/ModalBody/ModalBody";
import Loader from "../components/Shared/Loader/Loader";
import NotificationCard from "../components/Cards/NotificationCard";
import OwnerBookConfirmCard from "../components/Cards/OwnerBookConfirmCard";
import NoNotification from "../components/InitialPages/NoNotification";
import { Helmet } from "react-helmet-async";

const Notification = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading, isError } = useGetUserBorrowedBooksQuery(
    user?.email
  );
  const [selectedNotification, setSelectedNotification] = useState(null);
  const userNotification = data?.data?.[0]?.userNotification || [];

  // Loading spinner if loading
  if (isLoading) {
    return <ModalBody modal={<Loader />} />;
  }

  return (
    <main className="w-full md:w-[90%] lg:w-[70%] h-[85dvh] mx-auto my-6 overflow-y-auto custom-scrollbar">
      {/* Helmet title provider */}
      <Helmet>
        <title>Bookswap Hub | Notifications</title>
      </Helmet>

      {/* Initial page if no notifications */}
      {userNotification.length === 0 && !isLoading && !isError && (
        <NoNotification element={"Notification"} />
      )}

      {/* Map all the notification from last to first order */}
      {userNotification
        .slice()
        .reverse()
        .map((notification) => (
          <NotificationCard
            key={notification._id}
            notification={notification}
            onClick={() => setSelectedNotification(notification)}
          />
        ))}

      {/* If notification is clicked then open the details of notification and confirmation in a modal */}
      {selectedNotification && (
        <ModalBody
          modal={
            <OwnerBookConfirmCard
              notificationInfo={selectedNotification}
              close={() => setSelectedNotification(null)}
            />
          }
        />
      )}
    </main>
  );
};

export default Notification;
