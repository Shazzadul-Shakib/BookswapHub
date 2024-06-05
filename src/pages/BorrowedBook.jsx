import { useContext } from "react";
import BorrowedBookCard from "../components/Cards/BorrowedBookCard";
import { useGetUserBorrowedBooksQuery } from "../redux/api/users-api";
import { AuthContext } from "../provider/authProviders";
import Loader from "../components/Shared/Loader/Loader";
import ModalBody from "../components/Shared/ModalBody/ModalBody";

const BorrowedBook = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading, isError } = useGetUserBorrowedBooksQuery(user.email);
  const borrowedBookInfo = data?.data[0].borrowedBooks;
  const userId = data?.data[0]._id;

  let newBorrowedBookInfo = [];

  // Check if borrowedBookInfo is an array
  if (Array.isArray(borrowedBookInfo)) {
    newBorrowedBookInfo = borrowedBookInfo.map((book) => ({
      ...book,
      userId,
    }));
  }

  return (
    <main className="w-full md:w-[90%] lg:w-[70%] h-[85dvh] mx-auto my-6 overflow-y-auto custom-scrollbar">
      {newBorrowedBookInfo.slice().reverse().map((data, index) => (
        <BorrowedBookCard key={index} bookInfo={data} />
      ))}

      {isLoading && <ModalBody modal={<Loader />} />}
    </main>
  );
};

export default BorrowedBook;
