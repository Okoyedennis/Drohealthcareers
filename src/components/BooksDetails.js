import React from "react";

const BooksDetails = ({ publisher, name, isbn, author, release, index }) => {
  const cleanedDate = new Date(release).toDateString();
  return (
    <div className=" mt-10 h-auto bg-purple-100 cursor-pointer  rounded py-5 pl-2 shadow hover:scale-105 transform transition duration-300 ease-out">
      <div className=" text-center mb-5">
        <h4 className="text-gray-500 font-medium">No {index + 1}</h4>
        <h2 className="font-medium text-lg tracking-wide">{name}</h2>
      </div>

      <div className="text-sm">
        <p className="mb-2">
          <span className="font-semibold mr-2">Authors:</span> {author}
        </p>
        <p className="mb-2">
          <span className="font-semibold mr-2">Pulisher:</span>
          {publisher}
        </p>
        <p className="mb-2">
          <span className="font-semibold mr-2">ISBN:</span> {isbn}
        </p>
        <p className="mb-2">
          <span className="font-semibold mr-2">Released:</span>
          {cleanedDate}
        </p>
      </div>
    </div>
  );
};

export default BooksDetails;
