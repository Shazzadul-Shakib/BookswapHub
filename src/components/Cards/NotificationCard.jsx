import profile from "../../assets/pIcon.png";

const NotificationCard = ({ notification }) => {
  console.log(notification);
  const { userName, userImage } = notification.borrowerUserId;
  const { bookName } = notification.bookId;
  return (
    <main className=" flex items-center gap-4 bg-tertiary rounded p-4 my-4">
      <div className=" flex items-center h-[50px] w-[50px]">
        <img
          className="rounded-full"
          src={userImage == "" ? profile : userImage}
          alt="User Photo"
        />
      </div>
      <div className=" flex gap-1 text-secondary text-xl">
        <h1 className=" font-semibold">{userName}</h1>
        <p>
          wants to borrow your{" "}
          <span className=" text-accent font-semibold"> "{bookName}"</span> book
        </p>
      </div>
    </main>
  );
};

export default NotificationCard;
