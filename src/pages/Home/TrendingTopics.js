import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import getTrendingTopics from "services/getTrendingTopics";

const TrendingTopics = () => {
  const [trendingTerms, setTrendingTerms] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchTrendingTopics = async () => {
      const data = await getTrendingTopics();
      if (data.meta.status === 200) {
        setTrendingTerms(data.data);
      }
    };
    fetchTrendingTopics();
  }, []);

  const handleClick = (term) => {
    if (term) {
      history.push(`/gifs/search/${term}`);
    }
  };

  return (
    <div className="trending-topics">
      {!trendingTerms
        ? null
        : trendingTerms.map((term) => {
            return (
              <button
                key={term}
                onClick={() => handleClick(term)}
                className="trending-term"
              >
                {term}
              </button>
            );
          })}
    </div>
  );
};

export default TrendingTopics;
