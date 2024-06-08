import { useGetBookQuery } from "../../../redux/api/books-api";
import RecommendedCard from "../../Cards/RecommendedCard";
import NoNotification from "../../InitialPages/NoNotification";
import Loader from "../../Shared/Loader/Loader";
import ModalBody from "../../Shared/ModalBody/ModalBody";

const Recommended = () => {
  const { data, isLoading, isError } = useGetBookQuery();

  // Loader spinner if loading
  if (isLoading) {
    return <ModalBody modal={<Loader />} />;
  }

  const books = data?.data || [];

  return (
    <main className="my-5 px-2">
      <h1 className="text-secondary text-2xl pb-4">Recommended for you</h1>
      <div>
        {/* Initial page if there is no reccomended card or books */}
        {books.length === 0 && !isLoading && !isError && (
          <NoNotification element={"Books Uploaded"} />
        )}

        {/* map books from last to first order */}
        <div className="grid items-center justify-items-center gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books
            .slice()
            .reverse()
            .map((book) => (
              <RecommendedCard key={book._id} book={book} />
            ))}
        </div>
      </div>
    </main>
  );
};

export default Recommended;
