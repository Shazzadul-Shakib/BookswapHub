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
import profile from "../../assets/pIcon.png";
import { toast } from "react-toastify";

const BookmarkCard = ({ book }) => {
  const { user } = useContext(AuthContext);
  const { data, isLoading } = useGetUserBorrowedBooksQuery(user.email);
  const [updateBookmark] = useUpdateBookmarkMutation();
  const [bookMarked, setBookMarked] = useState(null);
  const { bookmarkOutline, bookmark, notAvailable } = allIconsData;

  // Loader spinner if Loading
  if (isLoading) {
    return <ModalBody modal={<Loader />} />;
  }
  // BookMarked book from userData and filter them if they are bookmarked
  const userBookMarks = data?.data[0]?.userBookmark || [];
  const saved = userBookMarks?.some(
    (bookmark) => bookmark.bookId._id === book.bookId._id
  );

  // Update the status of bookmark
  useEffect(() => {
    const updateUserBookmark = async () => {
      try {
        await updateBookmark({
          ownerEmail: user.email,
          data: { bookId: book.bookId._id, bookmarked: bookMarked },
        });
        bookMarked
          ? toast.info("Book added to bookmark")
          : toast.info("Book removed from bookmark");
      } catch (error) {
        toast.error(error.message);
      }
    };
    
    // If bookmark is true or false and provided info is legal then call the function to operate
    if (bookMarked !== null && user && book.bookId._id) {
      updateUserBookmark();
    }
  }, [bookMarked]);

  // Handle bookmark click and stop propagation by not mixing up the events
  const handleBookmark = (event) => {
    event.stopPropagation();
    setBookMarked((prev) => false); // Toggle between true and false, reset to null on reload
  };

  return (
    <main className="relative flex flex-col items-center my-4">
      <div className="relative flex flex-col h-[200px] w-[300px] rounded-xl overflow-hidden shadow-lg bg-gradient-to-t from-tertiary via-tertiary to-transparent">
        <Link
          to={`/book/${book.bookId._id}`}
          className="relative flex justify-center items-end h-full w-full cursor-pointer overflow-hidden "
        >
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-80"
            src={book?.bookId.bookImage}
            alt="Book Image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
        </Link>
        {book?.bookId?.borrowed && (
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

        <div className=" text-white flex flex-col gap-2 items-center mt-2 p-2">
          <h2 className=" text-secondary text-center font-semibold text-sm p-1">
            {book?.bookId.bookName}
          </h2>
        </div>
      </div>
      <div className="w-full mt-3 flex items-center gap-3">
        <div className=" flex items-center ">
          {book?.bookId.user?.userImage !== "" ? (
            <div className="h-[30px] w-[30px] rounded-full overflow-hidden border-2 border-secondary">
              <img src={book?.bookId.user?.userImage} alt="User photo" />
            </div>
          ) : (
            <div className="h-[30px] w-[30px] rounded-full overflow-hidden border-2 border-secondary">
              <img src={profile} alt="User photo" />
            </div>
          )}
        </div>
        <h2 className="text-sm text-secondary font-semibold">
          {book?.bookId.user?.userName}
        </h2>
      </div>
    </main>
  );
};

export default BookmarkCard;
