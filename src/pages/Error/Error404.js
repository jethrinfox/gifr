import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <div className="h-screen w-screen global-bg flex justify-center content-center flex-wrap">
        <p className="text-9xl text-white">404</p>
      </div>
      <div className="absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl">
        <span className="opacity-50">Take me back to </span>
        <Link className="border-b" to="/">
          GIFR
        </Link>
      </div>
    </div>
  );
};

export default Error404;
