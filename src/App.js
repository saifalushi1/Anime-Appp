import React, { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import AnimeList from './components/AnimeList'
import Anime from './components/Anime';
import './App.css';

const App = () => {
  const [apiData, setApiData] = useState([])
  // const url = 'https://kitsu.io/api/edge/trending/anime'
  const url = 'https://api.jikan.moe/v4/top/anime'
  
  useEffect(() => {
    fetch(url)
      .then((res) => res.json()) 
      .then((json) => {
        setApiData(json.data)
      })
  }, [])
  
  console.log(apiData)

  if (!apiData) {
    <p>Site Loading</p>
  }

  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
      <Routes>
        <Route path='/' element={ <AnimeList nestedData={ apiData } />} />
        <Route path='/trending-anime/:id' element={ <Anime /> } />
      </Routes>
    </div>
  )
}

export default App;