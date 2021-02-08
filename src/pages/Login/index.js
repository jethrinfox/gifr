import LoginForm from "components/Auth/LoginForm";
import Layout from "components/Layout";
import { AuthContext } from "context/AuthContext";
import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Redirect } from "react-router-dom";

const Login = () => {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <Layout>
      <Helmet>
        <title>gifr | Login!</title>
      </Helmet>
      <div className="flex-grow global-bg p-4 flex flex-col justify-center items-center">
        <h1 className="global-title">Login</h1>
        <LoginForm />
      </div>
    </Layout>
  );
};

export default Login;
