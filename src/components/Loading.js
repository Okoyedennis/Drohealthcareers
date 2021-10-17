import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Loading = () => {
  return (
    <SkeletonTheme color="#E5E7EB" highlightColor="#fff">
      <div className=" mt-10 h-auto bg-purple-100 cursor-pointer  rounded py-5 px-2 shadow hover:scale-105 transform transition duration-300 ease-out">
        <div className=" text-center mb-5">
          <h4 className="text-gray-500 font-medium">
            <Skeleton />
          </h4>
          <h2 className="font-medium text-lg tracking-wide">
            <Skeleton />
          </h2>
        </div>

        <div className="text-sm">
          <p className="mb-2">
            <Skeleton />
          </p>
          <p className="mb-2">
            <Skeleton />
          </p>
          <p className="mb-2">
            <Skeleton />
          </p>
          <p className="mb-2">
            <Skeleton />
          </p>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default Loading;
