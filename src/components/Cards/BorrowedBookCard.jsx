
const BorrowedBookCard = ({bookInfo}) => {
const {bookName,bookImage}=bookInfo.bookId;
const { userName: owner } = bookInfo.bookOwnerUserId;


  return (
    <main className=" h-[100px] flex items-center bg-tertiary w-full rounded-lg my-4">
      <section className="h-full flex items-center flex-1 gap-6  mx-4 ">
        <div className=" bg-secondary p-1 rounded">
          <img className=" h-[80px] " src={bookImage} alt="Book Image" />
        </div>
        <div className="  text-secondary">
          <h1 className="font-semibold">{bookName}</h1>
          <h2 className=" text-sm">Owner : {owner}</h2>
        </div>
      </section>
      <section className=" mr-6">
        {bookInfo.pending && (
          <div className=" px-4 py-2 rounded border border-yellow-400 text-xs font-semibold text-secondary">
            Pending
          </div>
        )}
      </section>
    </main>
  );
};

export default BorrowedBookCard;
