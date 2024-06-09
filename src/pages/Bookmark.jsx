import { useContext } from "react";
import { useGetUserBorrowedBooksQuery } from "../redux/api/users-api";
import { AuthContext } from "../provider/authProviders";
import ModalBody from "../components/Shared/ModalBody/ModalBody";
import Loader from "../components/Shared/Loader/Loader";
import BookmarkCard from "../components/Cards/bookmarkCard";
import NoNotification from "../components/InitialPages/NoNotification";
import { Helmet } from "react-helmet-async";

const Bookmark = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading, isError } = useGetUserBorrowedBooksQuery(user.email);
  const userBookMarks = data?.data[0]?.userBookmark || [];

  // Loader spinner if loading
  if (isLoading) {
    return <ModalBody modal={<Loader />} />;
  }

  return (
    <main className="h-[87dvh] overflow-y-auto custom-scrollbar my-5 px-2 ">
      {/* Helmet title provider */}
      <Helmet>
        <title>Bookswap Hub | Bookmarks</title>
      </Helmet>

      {/*  Bookmark section starts from here */}
      <h1 className="text-secondary text-2xl pb-4">Bookmarks for you</h1>

      {/*Initial page style if no bookmarks  */}
      {userBookMarks.length === 0 && !isLoading && !isError && (
        <NoNotification element={"Bookmark"} />
      )}

      {/* Bookmarks showen here from the last order to first */}
      <div className=" grid items-center justify-items-center gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
