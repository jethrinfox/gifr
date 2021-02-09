import { useGifs } from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import React, { useCallback, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import GifList from "../../components/GifList";
import OverlayFullPage from "../../components/OverlayFullPage";
import SearchInput from "../../components/SearchInput";

const SearchGifs = () => {
  const { keyword } = useParams();

  const { loading, searchedGifs, setPage } = useGifs({ keyword });

  const externalRef = useRef(null);

  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
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

  if (loading || !searchedGifs) {
    return <OverlayFullPage />;
  }

  return (
    <div className="mx-auto">
      <SearchInput />
      <GifList gifs={searchedGifs} />
      <div ref={externalRef} />
    </div>
  );
};

export default SearchGifs;
