import { useGifs } from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import React, { useCallback, useEffect, useRef } from "react";
import GifList from "../../components/GifList";
import OverlayFullPage from "../../components/OverlayFullPage";
import SearchInput from "../../components/SearchInput";

const TrendingGifs = () => {
  const { isLoading, trending, setPage } = useGifs();

  const externalRef = useRef(null);

  const { isNearScreen } = useNearScreen({
    externalRef: isLoading ? null : externalRef,
    once: false,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);

  if (isLoading || !trending) {
    return <OverlayFullPage />;
  }

  return (
    <div className="mx-auto">
      <SearchInput />
      <GifList gifs={trending} />
      <div ref={externalRef} />
    </div>
  );
};

export default TrendingGifs;
