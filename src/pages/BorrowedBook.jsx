import { useContext } from "react";
import BorrowedBookCard from "../components/Cards/BorrowedBookCard";
import { useGetUserBorrowedBooksQuery } from "../redux/api/users-api";
import { AuthContext } from "../provider/authProviders";
import Loader from "../components/Shared/Loader/Loader";

const BorrowedBook = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading, isError } = useGetUserBorrowedBooksQuery(user.email);
  if (isLoading) {
    return <Loader />;
  }
  const borrowedBookInfo = data?.data[0].borrowedBooks;
  console.log(borrowedBookInfo);
  return (
    <main className=" w-[70%] mx-auto my-4">
      {borrowedBookInfo.map((data,index) => (
        <BorrowedBookCard key={index}   bookInfo={data}/>
      ))}
    </main>
  );
};

export default BorrowedBook;
