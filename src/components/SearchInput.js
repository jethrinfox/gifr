import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const SearchInput = () => {
  const [value, setValue] = useState("");
  const history = useHistory();

  const handleSubmit = useCallback(() => {
    if (value) {
      history.push(`/gifs/search/${value}`);
    }
  }, [value, history]);

  useEffect(() => {
    const timeoutId = setTimeout(() => handleSubmit(), 1000);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="search-bar">
      <input
        value={value}
        placeholder="Search..."
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <button onClick={handleSubmit}>
        <AiOutlineSearch />
      </button>
    </div>
  );
};

export default React.memo(SearchInput);
