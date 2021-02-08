import React, { useContext, useEffect } from "react";
import GifList from "../../components/GifList";
import { GifContext } from "../../context/GifContext";
import OverlayFullPage from "../../components/OverlayFullPage";
import SearchInput from "../../components/SearchInput";

const TrendingGifs = () => {
  const {
    state: {
      gifs: { trending },
      isLoading,
    },
    getTrending,
  } = useContext(GifContext);

  useEffect(function () {
    getTrending();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading || !trending) {
    return <OverlayFullPage />;
  }

  return (
    <div className="mx-auto">
      <SearchInput />
      <GifList gifs={trending} />
    </div>
  );
};

export default TrendingGifs;
