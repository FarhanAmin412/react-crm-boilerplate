import { useState } from "react";
import SidePic from "../../assets/sidepic.jpg";

const Card = () => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const handleClick = () => {
    setIsFavourite((prevState: boolean) => !prevState);
  };
  return (
    <div className="flex gap-x-6 rounded-l-lg shadow-2xl shadow-gray-400">
      <div className="flex-none w-48 relative">
        <img
          className="absolute inset-0 rounded-l-lg w-full h-full object-cover"
          src={SidePic}
          alt="sidepic"
        />
      </div>
      <form className="flex-auto rounded-r-md p-6">
        <div className="flex font-semibold justify-between w-96 h-6">
          <h1 className="">Classic Utility Jacket</h1>
          <span className="text-greyLight">$110.00</span>
        </div>
        <div className="text-sm text-slate-700 mt-2 mb-2 font-medium">
          In stock
        </div>
        <div className="mt-4 mb-6 justify-between inline-flex w-[15rem]">
          <label>
            <input type="radio" className="sr-only" />
            <div className="bg-black  cursor-pointer hover:opacity-20 active:opacity-70 transition-opacity duration-300 text-white inline-block font-semibold p-2 rounded-md">
              XS
            </div>
          </label>
          <label>
            <input type="radio" className="sr-only" />
            <div className="bg-white  cursor-pointer text-black inline-block font-semibold p-2 rounded-md hover:bg-slate-300 active:bg-slate-500 transition-all duration-300">
              S
            </div>
          </label>
          <label>
            <input type="radio" className="sr-only" />
            <div className="bg-white cursor-pointer text-black inline-block font-semibold p-2 rounded-md hover:bg-slate-300 active:bg-slate-500  transition-all duration-300">
              M
            </div>
          </label>
          <label>
            <input type="radio" className="sr-only" />
            <div className="bg-white cursor-pointer text-black inline-block font-semibold p-2 rounded-md hover:bg-slate-300 active:bg-slate-500  transition-all duration-300">
              L
            </div>
          </label>
          <label>
            <input type="radio" className="sr-only" />
            <div className="bg-white cursor-pointer text-black inline-block font-semibold p-2 rounded-md hover:bg-slate-300 active:bg-slate-500  transition-all duration-300">
              XL
            </div>
          </label>
        </div>
        <div className="flex justify-between mt-4 mb-6">
          <button className="text-white  cursor-pointer bg-black font-semibold py-2 px-6 rounded-md border border-slate-200">
            Buy Now
          </button>
          <button className="text-black font-semibold py-2 px-6 rounded-md border border-slate-200">
            Add to Bag
          </button>
          <button
            className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
            type="button"
            aria-label="Like"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              aria-hidden="true"
              onClick={handleClick}
              {...(isFavourite && {
                className: "fill-[#AA3434] transition-all duration-300",
              })}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
          </button>
        </div>
        <p className="text-sm text-slate-700">
          Free shipping on all continental US orders.
        </p>
      </form>
    </div>
  );
};

export default Card;
