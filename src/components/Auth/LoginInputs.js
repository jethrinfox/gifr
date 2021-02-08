import React, { useState } from "react";

const LoginInputs = ({ handleInputSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length > 3) {
      handleInputSignIn(email, password);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form className="form">
      <label className="form-label">
        <span>Email</span>
        <input
          value={email}
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
          type="text"
        />
      </label>
      <label className="form-label">
        <span>Password</span>
        <input
          value={password}
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
          type="password"
        />
      </label>
      <button onSubmit={(e) => handleSubmit(e)} type="submit">
        SignUp
      </button>
    </form>
  );
};

export default LoginInputs;
