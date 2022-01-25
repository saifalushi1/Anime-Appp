import React, { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimeList from './components/AnimeList'
import MangaList from './components/MangaList';
import Anime from './components/Anime';
import './App.css';
import Manga from './components/Manga';

const App = () => {
  const [apiData, setApiData] = useState([])
  const [mangaData, setMangaData] = useState([])

  const url = 'https://api.jikan.moe/v4/top/anime?limit=10'
  
  useEffect(() => {
    fetch(url)
      .then((res) => res.json()) 
      .then((json) => {
        setApiData(json.data)
      })
      .catch(console.error)
  }, [])

  const mangaUrl = "https://api.jikan.moe/v4/top/manga?limit=10" 

  useEffect(() => {
    fetch(mangaUrl)
      .then((res) => res.json()) 
      .then((json) => {
        console.log(json)
        setMangaData(json.data)
      })
      .catch(console.error)
  }, [])
  
  console.log(apiData)
  console.log(mangaData)

  if (!apiData) {
    <p>Site Loading</p>
  }

  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/manga'><p> Manga</p>Manga</Link>
      </nav>
      <Routes>
        <Route path='/' element={ <AnimeList nestedData={ apiData } />} />
        <Route path='/manga' element={ <MangaList nestedMangaData={ mangaData } /> } />
        <Route path="/manga/:id" element= {<Manga /> } />
        <Route path='/top-anime/:id' element={ <Anime /> } />
      </Routes>
    </div>
  )
}

export default App;