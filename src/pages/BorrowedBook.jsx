import { useContext } from "react";
import BorrowedBookCard from "../components/Cards/BorrowedBookCard";
import { useGetUserBorrowedBooksQuery } from "../redux/api/users-api";
import { AuthContext } from "../provider/authProviders";
import Loader from "../components/Shared/Loader/Loader";
import ModalBody from "../components/Shared/ModalBody/ModalBody";

const BorrowedBook = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading, isError } = useGetUserBorrowedBooksQuery(user.email);
  if (isLoading) {
    return <ModalBody modal={<Loader/>} /> ;
  }
  const borrowedBookInfo = data?.data[0].borrowedBooks;
  console.log(data.data[0].userNotification);
  return (
    <main className=" w-full md:w-[90%] lg:w-[70%] h-[85dvh] mx-auto my-6 overflow-y-auto custom-scrollbar">
      {borrowedBookInfo.map((data, index) => (
        <BorrowedBookCard key={index} bookInfo={data} />
      ))}
    </main>
  );
};

export default BorrowedBook;
