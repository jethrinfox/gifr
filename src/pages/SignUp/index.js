import LoginForm from "components/Auth/LoginForm";
import Layout from "components/Layout";
import { AuthContext } from "context/AuthContext";
import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Redirect } from "react-router-dom";

const SignUp = () => {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <Layout>
      <Helmet>
        <title>gifr | SignUp!</title>
      </Helmet>
      <div className="flex-grow global-bg p-4 flex flex-col justify-center items-center">
        <h1 className="global-title">SignUp</h1>
        <LoginForm />
      </div>
    </Layout>
  );
};

export default SignUp;
