import { Link } from "react-router-dom";
import { allIconsData } from "../../data/all-icons-data";
import { useContext, useEffect, useState } from "react";
import {
  useGetUserBorrowedBooksQuery,
  useUpdateBookmarkMutation,
} from "../../redux/api/users-api";
import { AuthContext } from "../../provider/authProviders";
import ModalBody from "../Shared/ModalBody/ModalBody";
import Loader from "../Shared/Loader/Loader";

const RecommendedCard = ({ book }) => {
  const { user } = useContext(AuthContext);
  const { data, isLoading } = useGetUserBorrowedBooksQuery(user.email);
  const [updateBookmark] = useUpdateBookmarkMutation();
  const [bookMarked, setBookMarked] = useState(null); // Initial state is null
  const { bookmarkOutline, profile, notAvailable } = allIconsData;

  const userBookMarks = data?.data[0]?.userBookmark || [];
  const saved = userBookMarks?.some(
    (bookmark) => bookmark.bookId._id === book._id
  );
  console.log(book)

  useEffect(() => {
    const updateUserBookmark = async () => {
      try {
        await updateBookmark({
          ownerEmail: user.email,
          data: { bookId: book._id, bookmarked: bookMarked },
        });
      } catch (error) {
        console.error("Failed to update bookmark:", error);
      }
    };

    if (bookMarked !== null && user && book._id) {
      updateUserBookmark();
    }
  }, [bookMarked]);

  const handleBookmark = (event) => {
    event.stopPropagation();
    setBookMarked((prev) => (prev === null ? true : !prev)); // Toggle between true and false, reset to null on reload
  };

  return (
    <main className="relative flex flex-col my-4">
      <Link
        to={`/book/${book._id}`}
        className="h-[130px] w-[260px] rounded-xl my-1 flex justify-center relative overflow-hidden cursor-pointer"
      >
        <img
          className="max-h-full max-w-full"
          src={book?.bookImage}
          alt="Book Image"
        />

        <div className="absolute flex items-end p-3 h-full w-full bg-gradient-to-t from-[#0f0e0ed3] via-black-opacity-50 to-transparent">
          <h2 className="w-full text-secondary text-center font-bold text-xs py-1">
            {book?.bookName}
          </h2>
        </div>
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
        className={`absolute top-3 right-4 text-sm cursor-pointer ${
          saved ? "text-accent" : "text-secondary"
        }`}
        onClick={handleBookmark}
      >
        {bookmarkOutline}
      </div>

      <div className="text-secondary flex gap-2 items-center mt-2">
        <div>
          {book?.user?.userImage !== "" ? (
            <div className="h-[25px] w-[25px] mt-1 rounded-full overflow-hidden">
              <img src={book?.user?.userImage} alt="User photo" />
            </div>
          ) : (
            <div className="text-[25px]">{profile}</div>
          )}
        </div>
        <h2 className="text-sm font-semibold py-1">{book?.user?.userName}</h2>
      </div>
      {isLoading && <ModalBody modal={<Loader />} />}
    </main>
  );
};

export default RecommendedCard;
