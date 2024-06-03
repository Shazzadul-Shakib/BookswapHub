import useToggle from "../../hooks/useToggle";
import BorrowerConfirmation_form from "../Forms/BorrowerConfirmation_form";
import ModalBody from "../Shared/ModalBody/ModalBody";

const BorrowedBookCard = ({ bookInfo }) => {
  const { bookName, bookImage } = bookInfo?.bookId;
  const { userName: owner } = bookInfo.bookOwnerUserId;
  const [isOpen,_,setIsOpen]=useToggle()

  return (
    <main className=" flex items-center bg-tertiary w-full rounded-lg my-4 py-1 ">
      <section className="flex items-center flex-1 gap-2 md:gap-6 mx-2  md:mx-4 ">
        <div className=" bg-secondary p-1 rounded">
          <img className="h-[70px] " src={bookImage} alt="Book Image" />
        </div>
        <div className="  text-secondary">
          <h1 className="text-xs md:text-base font-semibold">{bookName}</h1>
          <h2 className=" text-xs md:text-sm">Owner : {owner}</h2>
          {bookInfo.borrowed && (
            <h2 className=" text-xs md:text-sm">Deadline : {bookInfo.deadline} {bookInfo.deadline>1?"Days":"Day"}</h2>
          )}
        </div>
      </section>
      {bookInfo.borrowed == false ? (
        <section className=" mr-6">
          {bookInfo?.pending === null && (
            <div className="px-2 py-1 md:px-4 md:py-2 rounded border border-yellow-400 text-xs font-semibold text-secondary">
              Pending
            </div>
          )}
          {bookInfo?.pending === true && (
            <button
              onClick={() => setIsOpen(true)}
              className="px-2 py-1 md:px-4 md:py-2 rounded border border-green-400 text-xs font-semibold text-secondary"
            >
              Confirmed
            </button>
          )}
          {bookInfo?.pending === false && (
            <div className="px-2 py-1 md:px-4 md:py-2 rounded border border-red-400 text-xs font-semibold text-secondary">
              Rejected
            </div>
          )}
        </section>
      ) : (
        <section className=" mr-6">
          <div className=" px-2 py-1 md:px-4 md:py-2 rounded border border-green-400 text-xs font-semibold text-green-400">
            Borrowed
          </div>
        </section>
      )}
      {isOpen && (
        <ModalBody
          modal={
            <BorrowerConfirmation_form
              close={() => setIsOpen(false)}
              bookInfo={bookInfo}
            />
          }
        />
      )}
    </main>
  );
};

export default BorrowedBookCard;
