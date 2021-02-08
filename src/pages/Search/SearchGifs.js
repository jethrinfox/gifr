import React, { useContext, useEffect } from "react";
import GifList from "../../components/GifList";
import { GifContext } from "../../context/GifContext";
import OverlayFullPage from "../../components/OverlayFullPage";
import { useParams } from "react-router-dom";
import SearchInput from "../../components/SearchInput";

const SearchGifs = () => {
  const {
    state: {
      gifs: { searched },
      isLoading,
    },
    getByKeyword,
  } = useContext(GifContext);
  const { keyword } = useParams();

  useEffect(() => {
    getByKeyword(keyword);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  if (isLoading || !searched) {
    return <OverlayFullPage />;
  }

  return (
    <div className="mx-auto">
      <SearchInput />
      <GifList gifs={searched} />
    </div>
  );
};

export default SearchGifs;
