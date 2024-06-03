import profile from "../../assets/pIcon.png";

const NotificationCard = ({ notification, onClick }) => {
  const { userName, userImage } = notification.borrowerUserId;
  const { bookName } = notification.bookId;
  const { confirm } = notification;

  return (
    <main
      onClick={onClick}
      className="flex items-center gap-4 bg-tertiary rounded p-4 my-4 cursor-pointer"
    >
      <div className="flex items-center h-[50px] w-[50px]">
        <img
          className="rounded-full"
          src={userImage ? userImage : profile}
          alt="User Photo"
        />
      </div>
      <div className="flex gap-1 text-secondary text-xs md:text-xl">
        {confirm ? (
          <p>
            <span className="font-semibold">{userName}</span> borrowed your
            <span className="text-accent font-semibold">
              {" "}
              "{bookName}"
            </span>{" "}
            book successfully
          </p>
        ) : (
          <p>
            <span className="font-semibold">{userName}</span> wants to borrow
            your
            <span className="text-accent font-semibold">
              {" "}
              "{bookName}"
            </span>{" "}
            book
          </p>
        )}
      </div>
    </main>
  );
};

export default NotificationCard;
