"use client";
const SearchForm = () => {
  return (
    <div className="h-full  w-full flex flex-col sm:flex-row gap-2  justify-center items-center ">
      <input
        className="text-gray-800 align-middle bg-white border border-gray-300  h-10 mb-2.5 sm:mb-0 px-3 py-2 text-sm leading-normal block rounded-4xl"
        placeholder="Search"
      />
      <div className="flex gap-1.5 items-center">
        <select className="text-gray-800 align-middle bg-white border border-gray-300 h-10  px-3 py-2 text-sm leading-normal block rounded-4xl ">
          <option value="">Category</option>
        </select>
        <button className="bg-[var(--primary)] bg-primary text-white rounded-full px-5 py-2 text-sm leading-[120%] transition-colors duration-300 ">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
