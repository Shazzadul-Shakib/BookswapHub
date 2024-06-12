import { useContext } from "react";
import { useGetBookQuery } from "../redux/api/books-api";
import { AuthContext } from "../provider/authProviders";
import Loader from "../components/Shared/Loader/Loader";
import ManageBookCard from "../components/Cards/ManageBookCard";
import LoaderModalBody from "../components/Shared/ModalBody/LoaderModalBody";
import NoNotification from "../components/InitialPages/NoNotification";

const ManageYourCollection = () => {
  const { data, isLoading} = useGetBookQuery();
  const { user } = useContext(AuthContext);

  const books = data?.data || [];

  // Filter self collection books
  const selfCollection = books?.filter(
    (book) => book?.user?.userEmail == user?.email
  );

  if (isLoading) {
    return <LoaderModalBody modal={<Loader />} />;
  }
  return (
    <main className="w-full md:w-[95%] lg:w-[70%] h-[85dvh] mx-auto my-6 overflow-y-auto custom-scrollbar">
      {
        selfCollection.length === 0 && <NoNotification element={" No book to manage!"} />
      }
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
