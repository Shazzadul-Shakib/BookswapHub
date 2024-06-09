import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { allIconsData } from "../../data/all-icons-data";
import {
  useGetUserBorrowedBooksQuery,
  useUpdateBookmarkMutation,
} from "../../redux/api/users-api";
import { AuthContext } from "../../provider/authProviders";
import ModalBody from "../Shared/ModalBody/ModalBody";
import Loader from "../Shared/Loader/Loader";
import { toast } from "react-toastify";

const RecommendedCard = ({ book }) => {
  const { user } = useContext(AuthContext);
  const { data, isLoading } = useGetUserBorrowedBooksQuery(user.email);
  const [updateBookmark] = useUpdateBookmarkMutation();
  const [bookMarked, setBookMarked] = useState(null);
  const { bookmarkOutline, bookmark, profile, notAvailable } = allIconsData;

  // Check if the book is saved
  const userBookMarks = data?.data[0]?.userBookmark || [];
  const saved = userBookMarks.some(
    (bookmark) => bookmark.bookId._id === book._id
  );

  // Update the status of bookmark
  useEffect(() => {
    const updateUserBookmark = async () => {
      try {
        await updateBookmark({
          ownerEmail: user.email,
          data: { bookId: book._id, bookmarked: bookMarked },
        });
        bookMarked
          ? toast.info("Book added to bookmark")
          : toast.info("Book removed from bookmark");
      } catch (error) {
        toast.error(error.message);
      }
    };

    if (bookMarked !== null) {
      updateUserBookmark();
    }
  }, [bookMarked, user.email, book._id, updateBookmark]);

  // Handle bookmark click and stop propagation from mixing up the click events
  const handleBookmark = (event) => {
    event.stopPropagation();
    setBookMarked(!saved);
  };

  if (isLoading) {
    return <ModalBody modal={<Loader />} />;
  }

  return (
    <main className="relative flex flex-col items-center my-4">
      <div className="relative flex flex-col h-[200px] w-[300px] rounded-xl overflow-hidden shadow-lg bg-gradient-to-t from-tertiary via-tertiary to-transparent ">
        <Link
          to={`/book/${book._id}`}
          className="relative flex justify-center items-end h-full w-full cursor-pointer"
        >
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-80"
            src={book?.bookImage}
            alt="Book Image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
        </Link>
        {book?.borrowed && (
          <div
            className="absolute top-3 left-4 text-accent"
            title="This book is already borrowed!"
          >
            {notAvailable}
          </div>
        )}
        <div
          className={`absolute top-3 right-4 text-lg cursor-pointer bg-tertiary p-2 rounded-full ${
            saved ? "text-accent" : "text-secondary"
          }`}
          onClick={handleBookmark}
        >
          {saved ? bookmark : bookmarkOutline}
        </div>

        <div className="text-white flex flex-col gap-2 items-center mt-2 p-2">
          <h2 className="text-secondary text-center font-semibold text-sm p-1">
            {book?.bookName}
          </h2>
        </div>
      </div>
      <div className="w-full mt-3 flex items-center gap-3">
        <div className="flex items-center">
          {book?.user?.userImage ? (
            <div className="h-[30px] w-[30px] rounded-full overflow-hidden border-2 border-secondary">
              <img src={book?.user?.userImage} alt="User photo" />
            </div>
          ) : (
            <div className="text-[40px]">{profile}</div>
          )}
        </div>
        <h2 className="text-sm text-secondary font-semibold">
          {book?.user?.userName}
        </h2>
      </div>
    </main>
  );
};

export default RecommendedCard;
