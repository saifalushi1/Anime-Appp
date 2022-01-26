/*eslint-disable react-hooks/exhaustive-deps */
/*eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Container } from "reactstrap"


const Manga = () => {
    const { id } = useParams()

    const [selectedMangaData, setSelectedMangaData] = useState([])

    const mangaIdUrl = `https://api.jikan.moe/v4/manga/${id}`
    useEffect(()=> {
        fetch(mangaIdUrl)
        .then((res)=> res.json())
        .then((json) => {
            console.log(json.data)
            setSelectedMangaData([json.data])
        })

    }, [])

    console.log(selectedMangaData)

    function checkManga(item){
        if(item.title === "One Piece"){
          return "101"
        }
        else if(item.title_english === "Grand Blue Dreaming"){
          return "17"
        }
        else if(item.title === "Kingdom"){
          return "63"
        }
        return item.volumes
      }
    return(
        <>
            <Container>
        {
            selectedMangaData.map((item)=> (
                <div key={item.mal_id} className="anime-page-div">
            <img className="anime-img" alt={item.title} src={ item.images.jpg.large_image_url } />
                <h3>{item.title}</h3>
                <div className="anime-info">
                    <ul className="anime-info-list">

                    {item.genres.map((genre, index)=> (
                        <li key={index}><p className="genre">{genre.name}</p></li>
                        ))}    
                    </ul>
                    <li><p>Vol {checkManga(item)} / {checkManga(item)}</p> </li>
                </div>
                <h6>{item.synopsis}</h6>
                    </div>
        ))
    }
    </Container>
        </>
    )
}

export default Manga