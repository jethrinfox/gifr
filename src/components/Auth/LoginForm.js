import { AuthContext } from "context/AuthContext";
import React, { useCallback, useContext } from "react";
import { AiFillGoogleSquare, AiOutlineUserAdd } from "react-icons/ai";
import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import LoginInputs from "./LoginInputs";

const LoginForm = () => {
  const { signIn } = useContext(AuthContext);

  const handleSignIn = (provider) => signIn(provider);

  const handleInputSignIn = useCallback(
    (email, password) => signIn("password", email, password),
    [signIn]
  );

  return (
    <div className="form-container">
      <div className="oauth-providers">
        <button
          className="sign-in"
          id="google"
          onClick={() => handleSignIn("google")}
        >
          <AiFillGoogleSquare /> Sign in with Google
        </button>
        <button
          className="sign-in"
          id="facebook"
          onClick={() => handleSignIn("facebook")}
        >
          <FaFacebookSquare /> Sign in with Google
        </button>
        <button
          className="sign-in"
          id="github"
          onClick={() => handleSignIn("github")}
        >
          <FaGithubSquare /> Sign in with GitHub
        </button>
        <button
          className="sign-in"
          id="anonymous"
          onClick={() => handleSignIn("anonymous")}
        >
          <AiOutlineUserAdd /> Sign in Anonymous
        </button>
      </div>
      <LoginInputs handleInputSignIn={handleInputSignIn} />
    </div>
  );
};

export default LoginForm;
