const Error = () => {
  return (
    <>
      <div className="flex flex-col justify-center w-[100vw] h-[100vh] items-center bg-gradient-to-r from-[#C4B7FD] to-[#BFD9FE]">
        <div className="bg-white p-6 sm:p-12 md:p-16 lg:p-24 rounded-2xl flex flex-col justify-center items-center">
          <p className="text-[4rem] lg:text-[8rem] text-[#C4B7FD] font-serif">404</p>
          <p className="text-black font-sans text-center font-medium mb-4 lg:text-[2rem]">OOPS! Something Went Wrong</p>
          <div className="flex gap-x-6 lg:gap-x-8">
            <button className="bg-red-500 text-white p-2 lg:px-5 lg:py-3 rounded-lg font-medium cursor-pointer">Home</button>
            <button className="bg-blue-500 text-white p-2 lg:px-5 lg:py-3 rounded-lg font-medium cursor-pointer">Contact Us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
