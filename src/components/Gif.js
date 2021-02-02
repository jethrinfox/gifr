import React from 'react'

const Gif = ({ gif }) => {
  const { images, title } = gif
  return (
    <div className="max-w-xs">
      <img className="w-auto h-auto" src={images.downsized_medium.url} alt={title} />
    </div>
  )
}

export default Gif
