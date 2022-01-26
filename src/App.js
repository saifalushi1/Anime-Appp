import React, { useState, useEffect } from "react"
import { Route, Routes, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import AnimeList from "./components/AnimeList"
import MangaList from "./components/MangaList";
import Anime from "./components/Anime";
import RandomAnime from "./components/RandomAnime";
import "./App.css";
import Manga from "./components/Manga";
import { NavItem, Nav } from "reactstrap";

const App = () => {
  const [apiData, setApiData] = useState([])
  const [mangaData, setMangaData] = useState([])

  const url = "https://api.jikan.moe/v4/top/anime?limit=10"
  
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
        setMangaData(json.data)
      })
      .catch(console.error)
  }, [])

  if (!apiData) {
    <p>Site Loading</p>
  }

  return (
    <div className="anime-app">
      <div className="navigation">
  <Nav pills>
    <NavItem className="home-nav">
      <Link to="/">Home</Link>
    </NavItem>
    <NavItem className="manga-nav">
      <Link to="/manga">Manga</Link>
    </NavItem>
    <NavItem className="random-nav">
      <Link to="/random-anime">Random</Link>
    </NavItem>
  </Nav>
</div>
  <div className="content-wrapper">
      <Routes>
        <Route path="/" element={ <AnimeList nestedData={ apiData } />} />
        <Route path="/manga" element={ <MangaList nestedMangaData={ mangaData } /> } />
        <Route path="/manga/:id" element= {<Manga /> } />
        <Route path="/top-anime/:id" element={ <Anime /> } />
        <Route path="/random-anime" element={ <RandomAnime /> } />
      </Routes>
  </div>
    </div>
  )
}

export default App;