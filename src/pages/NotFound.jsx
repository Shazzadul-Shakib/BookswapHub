import notFoundImage from "../assets/404.png";

const NotFound = () => {
  return (
    <main className=" flex justify-center items-center h-full">
      <img
        className="h-[400px] md:h-[800px]"
        src={notFoundImage}
        alt="Not Found Image"
      />
    </main>
  );
};

export default NotFound;
