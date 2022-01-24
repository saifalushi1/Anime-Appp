import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const Anime = () => {
    const { id } = useParams()

    const [animeData, setAnimeData] = useState([])

    const animeUrl = `https://api.jikan.moe/v4/anime/${id}`
    useEffect(() => {
        fetch(animeUrl)
        .then((res) => res.json())
        .then((json) => {
            setAnimeData(json.data)
        })
    }, [])
    console.log(animeData)

    if(!animeData){
        <p>Page Loading</p>
    }

    return(
        <>

        <h2>{ animeData.title}</h2>

        </>
    )
}

export default Anime