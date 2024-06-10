import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../redux/api/books-api";
import { useContext } from "react";
import Loader from "../components/Shared/Loader/Loader";
import ModalBody from "../components/Shared/ModalBody/ModalBody";
import Borrowbook_form from "../components/Forms/Borrowbook_form";
import useToggle from "../hooks/useToggle";
import { AuthContext } from "../provider/authProviders";
import profile from "../assets/pIcon.png";
import { Helmet } from "react-helmet-async";

const BookDetails = () => {
  const { book_id } = useParams();
  const { user } = useContext(AuthContext);
  const { data, isLoading } = useGetSingleBookQuery(book_id);
  const [isOpen, _, setIsOpen] = useToggle();

  let bookInfo = data?.data || [];
  const { borrowed } = bookInfo;

  return (
    <main className="container h-[85dvh] my-2 mx-auto p-4 lg:p-8 overflow-y-scroll">
      {/* Helmet title provider */}
      <Helmet>
        <title>
          {bookInfo?.bookName
            ? `${bookInfo?.bookName} | Book Details`
            : "Loading..."}
        </title>
      </Helmet>

      <div className="bg-tertiary shadow-2xl rounded-lg overflow-hidden flex flex-col lg:flex-row">
        {/* Image section */}
        <div className="lg:w-1/3 shadow-2xl  p-4 flex justify-center items-center">
          <img
            className="object-contain h-64 w-full lg:h-full lg:w-auto rounded"
            src={bookInfo?.bookImage}
            alt="Book"
          />
        </div>

        {/* Details section */}
        <div className="lg:w-2/3  md:px-[80px] p-6 flex flex-col justify-between space-y-6 text-secondary">
          <div className="space-y-4">
            {/* Book Name */}
            <h1 className="text-3xl font-bold ">{bookInfo?.bookName}</h1>

            {/* User profile */}
            <div className="flex items-center gap-4">
              <img
                className="h-14 w-14 rounded-full shadow"
                src={bookInfo?.user?.userImage || profile}
                alt="User"
              />
              <div>
                <h2 className="text-xl font-medium">
                  {bookInfo?.user?.userName}
                </h2>
              </div>
            </div>

            {/* Book's description */}
            <p className="text-md ">{bookInfo?.bookDescription}</p>

            {/* Additional info */}
            <div className="space-y-3 w-full md:w-2/3">
              <div className="flex justify-between">
                <span className="font-semibold">Author:</span>
                <span>{bookInfo?.author}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Language:</span>
                <span>{bookInfo?.language}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Page:</span>
                <span>{bookInfo?.page}</span>
              </div>
            </div>
          </div>

          {bookInfo?.user?.userEmail !== user.email && (
            <div className="pt-8 md:pt-4 w-full flex  justify-end">
              {/* Borrow book button */}
              {borrowed ? (
                <p className="py-2 px-4 border border-accent rounded text-center font-semibold text-accent">
                  This book is unavailable right now!
                </p>
              ) : (
                <button
                  onClick={() => setIsOpen(true)}
                  className="px-6 py-2 bg-accent text-secondary rounded-lg text-sm font-semibold hover:bg-secondary hover:text-accent"
                >
                  Borrow Book
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Loader spinner if loading */}
      {isLoading && <ModalBody modal={<Loader />} />}

      {/* Open modal for borrow book if true */}
      {isOpen && (
        <ModalBody
          modal={
            <Borrowbook_form
              bookInfo={bookInfo}
              close={() => setIsOpen(false)}
            />
          }
        />
      )}
    </main>
  );
};

export default BookDetails;
