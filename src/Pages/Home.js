import React from 'react'
import TopAlbums from '../Components/TopAlbums'
import TopArtists from '../Components/TopArtists'
import TopSongs from '../Components/TopSongs'

const Home = () => {
  return (
      <div class="container pl-2">
        <h1 class="text-3xl font-semibold ">Good Morning Rounak</h1>
        <h5 class="text-5xs font-semibold ">We have top songs for you!!</h5>
        <br />
        <TopSongs />
        <br />
        <TopAlbums />
        <br />
        <TopArtists />
      </div>
    
  )
}

export default Home