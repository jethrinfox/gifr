import { GifContext } from "context/GifContext";
import { useContext, useEffect, useState } from "react";
import getTrendingGifs from "services/getTrendingGifs";

const INITIAL_PAGE = 0;

export function useTrendingGifs() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);

  const [page, setPage] = useState(INITIAL_PAGE);
  const { trendingGifs, setTrendingGifs } = useContext(GifContext);

  // recuperamos la keyword del localStorage

  useEffect(
    function () {
      setIsLoading(true);

      getTrendingGifs().then((gifs) => {
        setTrendingGifs(gifs);
        setIsLoading(false);
      });
    },
    [setTrendingGifs]
  );

  useEffect(
    function () {
      if (page === INITIAL_PAGE) return;

      setLoadingNextPage(true);

      getTrendingGifs({ page }).then((nextGifs) => {
        setTrendingGifs((prevGifs) => prevGifs.concat(nextGifs));
        setLoadingNextPage(false);
      });
    },
    [page, setTrendingGifs]
  );

  return { isLoading, loadingNextPage, trendingGifs, setPage };
}
