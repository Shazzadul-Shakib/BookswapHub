import { allIconsData } from "../../data/all-icons-data";
import { useUpdateUserBorrowedBookStatusMutation } from "../../redux/api/users-api";

const OwnerBookConfirmCard = ({ notificationInfo, close }) => {
  const { cancel } = allIconsData;
  const [updateUserBorrowedBookStatus] = useUpdateUserBorrowedBookStatusMutation();

   const handleConfirmRequest = async () => {
     const confirmation = true;
     const result = await updateUserBorrowedBookStatus({
       userId: notificationInfo.borrowerUserId._id,
       bookId: notificationInfo.bookId._id,
       confirmation,
     }).unwrap();

     if (result?.data?.confirmationCode) {
       alert(`Confirmation code: ${result?.data?.confirmationCode}`);
     }
     close();
   };

  const handleRejectRequest = async () => {
    const confirmation = false;
    await updateUserBorrowedBookStatus({
      userId: notificationInfo.borrowerUserId._id,
      bookId: notificationInfo.bookId._id,
      confirmation,
    });
    close();
  };

  return (
    <main className="relative bg-primary w-[360px] md:w-[600px] max-h-[90vh] overflow-y-auto custom-scrollbar p-10 rounded-lg">
      <header
        onClick={close}
        className="absolute top-2 right-3 my-2 text-2xl text-accent cursor-pointer"
      >
        {cancel}
      </header>

      <section className="md:w-[80%] md:mx-auto flex flex-col md:flex-row justify-center gap-6 mb-6">
        <div className="flex flex-col justify-center items-center">
          <div className="h-48 rounded-lg overflow-hidden">
            <img
              className="h-full rounded-lg"
              src={notificationInfo.bookId.bookImage}
              alt="Book Image"
            />
          </div>
          <h1 className="text-secondary my-2 font-semibold">
            {notificationInfo.bookId.bookName}
          </h1>
        </div>
        <div className="text-secondary flex-1">
          <h2 className="text-center text-lg font-bold pb-6">Borrower Info</h2>
          <div className="space-y-2">
            <div className="flex justify-between w-full">
              <h3 className="w-1/4 text-sm font-semibold">Name</h3>
              <h3 className="w-3/4 text-sm">
                {notificationInfo.borrowerUserId.userName}
              </h3>
            </div>
            <div className="flex justify-between w-full">
              <h3 className="w-1/4 text-sm font-semibold">Address</h3>
              <h3 className="w-3/4 text-sm">
                {notificationInfo.borrowerAddress}
              </h3>
            </div>
            <div className="flex justify-between w-full">
              <h3 className="w-1/4 text-sm font-semibold">City</h3>
              <h3 className="w-3/4 text-sm">{notificationInfo.borrowerCity}</h3>
            </div>
            <div className="flex justify-between w-full">
              <h3 className="w-1/4 text-sm font-semibold">Phone</h3>
              <h3 className="w-3/4 text-sm">
                {notificationInfo.contactNumber}
              </h3>
            </div>
            <div className="flex justify-between w-full">
              <h3 className="w-1/4 text-sm font-semibold">Deadline</h3>
              <h3 className="w-3/4 text-sm">
                {notificationInfo.deadline}{" "}
                {notificationInfo.deadline > 1 ? "Days" : "Day"}
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-around gap-4">
        <button
          onClick={handleRejectRequest}
          className="text-secondary px-4 py-2 bg-accent w-full text-sm font-semibold rounded"
        >
          Reject
        </button>
        <button
          onClick={handleConfirmRequest}
          className="text-secondary px-4 py-2 bg-tertiary w-full text-sm font-semibold rounded"
        >
          Confirm
        </button>
      </section>
    </main>
  );
};

export default OwnerBookConfirmCard;
