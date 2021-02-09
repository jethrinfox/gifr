import React from "react";
import Layout from "../../components/Layout";
import TrendingGifs from "./TrendingGifs";
import { Helmet } from "react-helmet-async";
import TrendingTopics from "./TrendingTopics";

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>gifr | Trending Gifs!</title>
      </Helmet>
      <div className="flex-grow global-bg p-4">
        <h1 className="global-title">Trending Gifs</h1>
        <TrendingGifs />
        <TrendingTopics />
      </div>
    </Layout>
  );
};

export default Home;
