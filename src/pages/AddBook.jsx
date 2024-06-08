import { Helmet } from "react-helmet-async";
import YourCollection from "../components/Addbookpage/YourCollection/YourCollection";

const AddBook = () => {
  return (
    <main>
      {/* Helmet title provider */}
      <Helmet>
        <title>Bookswap Hub | Add Book</title>
      </Helmet>

      <YourCollection />
    </main>
  );
};

export default AddBook;
