import { GifContext } from "context/GifContext";
import { useContext, useEffect, useState } from "react";

const INITIAL_PAGE = 0;

export function useGifs({ keyword } = { keyword: null }) {
  const {
    state: {
      gifs: { trending, searched },
      isLoading,
    },
    getTrending,
    getByKeyword,
  } = useContext(GifContext);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);

  useEffect(() => {
    if (keyword) {
      getByKeyword({ keyword });
    } else {
      getTrending();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  useEffect(() => {
    console.log("page: ", page);
    if (page === INITIAL_PAGE) return;
    setLoadingNextPage(true);
    if (keyword) {
      getByKeyword({ keyword, page });
    } else {
      getTrending({ page });
    }
    setLoadingNextPage(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return { isLoading, loadingNextPage, trending, searched, setPage };
}
