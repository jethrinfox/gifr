import { AuthContext } from "context/AuthContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, signOut } = useContext(AuthContext);

  const content = (user) => {
    if (!user) {
      return (
        <>
          <Link to="/login" className="text-lg mr-4 text-white">
            Login
          </Link>
          <Link to="/signup" className="text-lg text-white">
            Signup
          </Link>
        </>
      );
    }
    return (
      <>
        <Link to="/gifs/fav" className="text-lg mr-4 text-white">
          Favs
        </Link>
        <button onClick={signOut} className="text-lg mr-4 text-white">
          Logout
        </button>
      </>
    );
  };

  return (
    <header className="global-bg">
      <div className="container mx-auto flex justify-between items-center p-10">
        <Link to="/" className="text-4xl font-bold text-white">
          gifr
        </Link>
        <nav className="flex justify-between items-center">{content(user)}</nav>
      </div>
    </header>
  );
};

export default Header;
