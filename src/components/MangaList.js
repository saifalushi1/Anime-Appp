import React from "react"
import { Link } from "react-router-dom"

const MangaList = ( {nestedMangaData} ) => {
console.log(nestedMangaData)
    return(

        <div>
             <h1>Top Manga</h1>
      {
        nestedMangaData.map((item, index) => (
          (index < 10 ? 
            <div key={item.mal_id}>
                <ul className="ulist">
                    <li className="item-top">
                        <div className="ranking">
                            <span>{ index + 1 }</span>
                        </div>
    
                        <div className="manga-poster">
                            <img className="manga-poster-img" alt={`${item.title} poster image`} src={ item.images.jpg.image_url }></img>
                        </div>

                        <div className="manga-details">
                        <Link to={ `/manga/${item.mal_id}` }>
                            <h3 className="manga-name">{ item.title_english ? item.title_english : item.title }</h3>
                        </Link>
                            <span className="episode-count">Volumes: { item.title === "One Piece" ? "101" : item.volumes ||
                            item.title_english === "Grand Blue Dreaming" ? "17" : item.volumes ||
                            item.title === "Kingdom" ? "63" : item.volumes
                            }</span>
                        </div>    
                    </li>
                </ul>
            </div>
          : null)
        ))
      }
    </div>
    )
}

export default MangaList