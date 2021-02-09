import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="global-bg">
      <nav className="container mx-auto p-8 flex justify-center items-center">
        <Link className="text-lg mr-4 text-white" to="/">
          item 1
        </Link>
        <Link className="text-lg text-white" to="/">
          item 2
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
