import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import SearchGifs from "./SearchGifs";

const Search = () => {
  const params = useParams();

  const keyword = params.keyword ? decodeURIComponent(params.keyword) : null;

  return (
    <Layout>
      <Helmet>
        <title>gifr | {keyword}!</title>
      </Helmet>
      <div className="flex-grow global-bg p-4">
        <h1 className="global-title">Search: {keyword}</h1>
        <SearchGifs />
      </div>
    </Layout>
  );
};

export default Search;
