import { useState } from "react";
import { useGetBookQuery } from "../../../redux/api/books-api";
import RecommendedCard from "../../Cards/RecommendedCard";
import NoNotification from "../../InitialPages/NoNotification";
import Loader from "../../Shared/Loader/Loader";
import LoaderModalBody from "../../Shared/ModalBody/LoaderModalBody";
import Searchbar from "../../Shared/Searchbar/Searchbar";

const Recommended = () => {
  const { data, isLoading, isError } = useGetBookQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const books = data?.data || [];
 

  // Filter books based on search term
  const filteredBooks = books.filter(
    (book) =>
      book.bookName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(searchTerm, filteredBooks);
  // Handle search input
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Loader spinner if loading
  if (isLoading) {
    return <LoaderModalBody modal={<Loader />} />;
  }

  return (
    <main className="my-5 px-2">
      <Searchbar onSearch={handleSearch} placeholder="search book by name or author name" />

      <h1 className="text-secondary text-2xl pb-4">Recommended for you</h1>
      <div>
        {/* Initial page if there are no recommended books */}
        {filteredBooks.length === 0 && !isLoading && !isError && (
          <NoNotification element={"Books Uploaded"} />
        )}

        {/* Map filtered books from last to first order */}
        <div className="grid items-center justify-items-center gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredBooks
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
