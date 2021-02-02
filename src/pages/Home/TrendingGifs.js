import React, { useContext, useEffect } from 'react'
import GifList from '../../components/GifList'
import { GifContext } from '../../context/GifContext'
import OverlayFullPage from '../../components/OverlayFullPage'

const TrendingGifs = () => {

  const { state: { gifs: { trending }, isLoading }, getTrending } = useContext(GifContext)

  useEffect(function () {
    getTrending()
  }, [getTrending])

  if (isLoading || !trending) {
    return <OverlayFullPage />
  }

  return (
    <div className="mx auto">
      <GifList gifs={trending} />
    </div>
  )
}

export default TrendingGifs
