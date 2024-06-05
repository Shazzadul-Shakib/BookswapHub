import { useContext } from "react";
import BorrowedBookCard from "../components/Cards/BorrowedBookCard";
import { useGetUserBorrowedBooksQuery } from "../redux/api/users-api";
import { AuthContext } from "../provider/authProviders";
import Loader from "../components/Shared/Loader/Loader";
import ModalBody from "../components/Shared/ModalBody/ModalBody";
import NoNotification from "../components/InitialPages/NoNotification";

const BorrowedBook = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading, isError } = useGetUserBorrowedBooksQuery(user.email);
  const borrowedBookInfo = data?.data[0]?.borrowedBooks;
  const userId = data?.data[0]?._id;

  let newBorrowedBookInfo = [];

  // Check if borrowedBookInfo is an array
  if (Array.isArray(borrowedBookInfo)) {
    newBorrowedBookInfo = borrowedBookInfo.map((book) => ({
      ...book,
      userId,
    }));
  }

  if (isLoading) {
    return (
      <main className="w-full md:w-[90%] lg:w-[70%] h-[85dvh] mx-auto my-6 overflow-y-auto custom-scrollbar">
        <ModalBody modal={<Loader />} />
      </main>
    );
  }

  return (
    <main className="w-full md:w-[90%] lg:w-[70%] h-[85dvh] mx-auto my-6 overflow-y-auto custom-scrollbar">
      {newBorrowedBookInfo.length === 0 && !isLoading && !isError && (
        <NoNotification element={"Borrowed Book Request"} />
      )}
      {newBorrowedBookInfo
        .slice()
        .reverse()
        .map((data, index) => (
          <BorrowedBookCard key={index} bookInfo={data} />
        ))}

      {isError && (
        <p className="text-center text-red-500">
          Failed to load borrowed books.
        </p>
      )}
    </main>
  );
};

export default BorrowedBook;
