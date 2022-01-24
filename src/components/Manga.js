import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


const Manga = () => {
    const { id } = useParams()

    const [selectedMangaData, setSelectedMangaData] = useState([])

    const mangaIdUrl = `https://api.jikan.moe/v4/manga/${id}`
    useEffect(()=> {
        fetch(mangaIdUrl)
        .then((res)=> res.json())
        .then((json) => {
            console.log(json.data)
            setSelectedMangaData(json.data)
        })

    }, [])

    console.log(selectedMangaData)
    return(
        <>
        <p>test</p>
        
        </>
    )
}

export default Manga