import { useState, useEffect } from "react"

const RandomAnime = () => {
    const [randomAnimeData, setRandomAnimeData] = useState([])

    const randomAnimeUrl = "https://api.jikan.moe/v4/random/anime"
    useEffect(() => {
        fetch(randomAnimeUrl)
        .then((res)=> res.json)
        .then((json)=> {
            setRandomAnimeData([json])
            console.log(json)
        })

    }, [])
    
    return(
        <>
        <p>test</p>
        </>
    )
}

export default RandomAnime