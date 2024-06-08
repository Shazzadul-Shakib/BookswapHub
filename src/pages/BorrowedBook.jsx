import { useContext } from "react";
import BorrowedBookCard from "../components/Cards/BorrowedBookCard";
import { useGetUserBorrowedBooksQuery } from "../redux/api/users-api";
import { AuthContext } from "../provider/authProviders";
import Loader from "../components/Shared/Loader/Loader";
import ModalBody from "../components/Shared/ModalBody/ModalBody";
import NoNotification from "../components/InitialPages/NoNotification";
import { Helmet } from "react-helmet-async";

const BorrowedBook = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading, isError } = useGetUserBorrowedBooksQuery(user.email);
  const borrowedBookInfo = data?.data[0]?.borrowedBooks;
  const userId = data?.data[0]?._id;

  let newBorrowedBookInfo = [];

  // Check if borrowedBookInfo is an array then map all the books and insert userId to them
  if (Array.isArray(borrowedBookInfo)) {
    newBorrowedBookInfo = borrowedBookInfo.map((book) => ({
      ...book,
      userId,
    }));
  }

  // Loader spinner if loading
  if (isLoading) {
    return <ModalBody modal={<Loader />} />;
  }

  return (
    <main className="w-full md:w-[90%] lg:w-[70%] h-[85dvh] mx-auto my-6 overflow-y-auto custom-scrollbar">
      {/* Helmet title provider */}
      <Helmet>
        <title>Bookswap Hub | Borrowed Books</title>
      </Helmet>

      {/* Initial page if no borrowed books  */}
      {newBorrowedBookInfo.length === 0 && !isLoading && !isError && (
        <NoNotification element={"Borrowed Book Request"} />
      )}

      {/* Map borrowed books from last order to first */}
      {newBorrowedBookInfo
        .slice()
        .reverse()
        .map((data, index) => (
          <BorrowedBookCard key={index} bookInfo={data} />
        ))}
    </main>
  );
};

export default BorrowedBook;
