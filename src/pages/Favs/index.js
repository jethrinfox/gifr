import Layout from "components/Layout";
import { AuthContext } from "context/AuthContext";
import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Redirect } from "react-router-dom";

const Favs = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Redirect to="login" />;
  }

  return (
    <Layout>
      <Helmet>
        <title>gifr | Favs!</title>
      </Helmet>
      <div className="flex-grow global-bg p-4">
        <h1 className="global-title">Favs</h1>
      </div>
    </Layout>
  );
};

export default Favs;
