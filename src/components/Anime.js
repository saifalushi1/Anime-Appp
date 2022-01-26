/*eslint-disable react-hooks/exhaustive-deps */
/*eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Container } from "reactstrap"

const Anime = () => {
    const { id } = useParams()

    const [animeData, setAnimeData] = useState([])
    
    const animeUrl = `https://api.jikan.moe/v4/anime/${id}`
    console.log(animeUrl)
    useEffect(() => {
        fetch(animeUrl)
        .then((res) => res.json())
        .then((json) => {
            console.log(json.data)
            setAnimeData([json.data])
            console.log(animeData)
        })
    }, [])
    
    console.log(animeData)
    

    

    if(!animeData){
        console.log(animeData)
        return(
            <p>Page Loading</p>
            )
    }
    console.log(animeData)
    return(
        <>
        {
            animeData.map((item)=> (
                <div key={item.mal_id} className="anime-page-div">
            <img className="anime-img" alt={item.title} src={ item.images.jpg.large_image_url } />
            <Container>
                <h3>{item.title}</h3>
                <div className="anime-info">
                    <ul className="anime-info-list">

                    {item.genres.map((genre, index)=> (
                        <li key={index}><p className="genre">{genre.name}</p></li>
                        ))}    
                    </ul>
                    <li><p>Ep {item.episodes} / {item.episodes} : {item.duration}</p> </li>
                </div>
                <h6>{item.synopsis}</h6>
             </Container>
                    </div>
        ))
        }
        <div>
        </div>
        </>
    )
}

export default Anime