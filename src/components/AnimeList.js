import React from 'react'
import { Link } from 'react-router-dom'

const AnimeList = ({ nestedData  }) => {
  console.log(nestedData)
  return (
    <div>
      <h1>Top Anime</h1>
      {
        nestedData.map((item, index) => (
          (index < 10 ? 
            <div key={item.mal_id}>
                <ul className="ulist">
                    <li className="item-top">
                        <div className="ranking">
                            <span>{ index + 1 }</span>
                        </div>
    
                        <div className="anime-poster">
                            <img className="anime-poster-img" alt={`${item.title} poster image`} src={ item.images.jpg.image_url }></img>
                        </div>

                        <div className="anime-details">
                        <Link to={ `/trending-anime/${item.mal_id}` }>
                            <h3 className="anime-name">{ item.title }</h3>
                        </Link>
                            <span className="episode-count">Episode Count: { item.episodes }</span>
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

export default AnimeList