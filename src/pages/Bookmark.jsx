import { useContext } from "react";
import { useGetUserBorrowedBooksQuery } from "../redux/api/users-api";
import { AuthContext } from "../provider/authProviders";
import ModalBody from "../components/Shared/ModalBody/ModalBody";
import Loader from "../components/Shared/Loader/Loader";
import RecommendedCard from "../components/Cards/RecommendedCard";
import BookmarkCard from "../components/Cards/bookmarkCard";
import NoNotification from "../components/InitialPages/NoNotification";

const Bookmark = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading, isError } = useGetUserBorrowedBooksQuery(user.email);
  const userBookMarks = data?.data[0]?.userBookmark || [];
  if (isLoading) {
    return <ModalBody modal={<Loader />} />;
  }

  return (
    <main>
      {userBookMarks.length === 0 && !isLoading && !isError && (
        <NoNotification element={"Bookmark"} />
      )}
      <div className="grid items-center justify-items-center gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {userBookMarks
          .slice()
          .reverse()
          .map((book) => (
            <BookmarkCard key={book._id} book={book} />
          ))}
      </div>
    </main>
  );
};

export default Bookmark;
