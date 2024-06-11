import { useContext } from "react";
import { useGetBookQuery } from "../redux/api/books-api";
import { AuthContext } from "../provider/authProviders";
import ModalBody from "../components/Shared/ModalBody/ModalBody";
import Loader from "../components/Shared/Loader/Loader";
import ManageBookCard from "../components/Cards/ManageBookCard";

const ManageYourCollection = () => {
  const { data, isLoading } = useGetBookQuery();
  const { user } = useContext(AuthContext);

  const books = data?.data || [];

  // Filter self collection books
  const selfCollection = books?.filter(
    (book) => book?.user?.userEmail == user?.email
  );
  console.log(selfCollection);

  if (isLoading) {
    return <ModalBody modal={<Loader />} />;
  }
  return (
    <main className="w-full md:w-[95%] lg:w-[70%] h-[85dvh] mx-auto my-6 overflow-y-auto custom-scrollbar">
      {selfCollection
        ?.slice()
        .reverse()
        .map((book) => (
          <ManageBookCard key={book._id} book={book} />
        ))}
    </main>
  );
};

export default ManageYourCollection;
