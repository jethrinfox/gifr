import { GifContext } from "context/GifContext";
import { useContext, useEffect, useState } from "react";
import getGifs from "services/getGifs";

const INITIAL_PAGE = 0;

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);

  const [page, setPage] = useState(INITIAL_PAGE);
  const { searchedGifs, setSearchedGifs } = useContext(GifContext);

  // recuperamos la keyword del localStorage
  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "random";

  useEffect(
    function () {
      setLoading(true);

      getGifs({ keyword: keywordToUse }).then((gifs) => {
        setSearchedGifs(gifs);
        setLoading(false);
        // guardamos la keyword en el localStorage
        localStorage.setItem("lastKeyword", keyword);
      });
    },
    [keyword, keywordToUse, setSearchedGifs]
  );

  useEffect(
    function () {
      if (page === INITIAL_PAGE) return;

      setLoadingNextPage(true);

      getGifs({ keyword: keywordToUse, page }).then((nextGifs) => {
        setSearchedGifs((prevGifs) => prevGifs.concat(nextGifs));
        setLoadingNextPage(false);
      });
    },
    [keywordToUse, page, setSearchedGifs]
  );

  return { loading, loadingNextPage, searchedGifs, setPage };
}
