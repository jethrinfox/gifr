import React from 'react'
import Gif from './Gif'

const GifList = ({ gifs }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row-dense grid-masonry gap-4">
      {gifs.map(gif => (
        <Gif gif={gif} key={gif.id} />
      ))}
    </div>
  )
}

export default GifList
