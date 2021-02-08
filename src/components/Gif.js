import React from "react";

const Gif = ({ gif }) => {
  return (
    <div className="max-w-xs">
      <img className="" src={gif.url} alt={gif.title} />
    </div>
  );
};

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.gif.id === nextProps.gif.id;
});
