import { useState, useEffect } from "react"
import { Container } from "reactstrap"

const RandomAnime = () => {
    const [randomAnimeData, setRandomAnimeData] = useState([])

    const randomAnimeUrl = "https://api.jikan.moe/v4/random/anime"
    useEffect(() => {
        fetch(randomAnimeUrl)
        .then((res)=> res.json())
        .then((json)=> {
            setRandomAnimeData([json.data])

        })
        .catch(console.error)
    }, [])

    if(!randomAnimeData){
        return(
            <p>Page Loading</p>
            )
    }
    return(
        <>
           <Container>
        {
            randomAnimeData.map((item)=> (
                <div key={item.mal_id} className="anime-page-div">
            <img className="anime-img" alt={item.title} src={ item.images.jpg.large_image_url } />
                <h3><a href={item.trailer.embed_url} target="_blank" rel="noreferrer">{item.title}</a></h3>
                <div className="anime-info">
                    <ul className="anime-info-list">
                    {item.genres.map((genre, index)=> (
                        <li key={index}><p className="genre">{genre.name}</p></li>
                        ))}    
                    </ul>
                    <li><p>Ep {item.episodes} / {item.episodes} : {item.duration}</p> </li>
                </div>
                <h6>{item.synopsis}</h6>
                </div>
        ))
    }
    </Container>
        </>
    )
}

export default RandomAnime