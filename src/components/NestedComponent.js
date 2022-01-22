import React from 'react'
import { Link } from 'react-router-dom'

const NestedComponent = ({ nestedData  }) => {
  console.log(nestedData)
  return (
    <div>
      <h1>Nested Data</h1>
      {
        nestedData.map((item, index) => (
            <div>
                <ul className="ulist">
                    <li className="item-top">
                        <div className="ranking">
                            <span>{index + 1}</span>
                        </div>
    
                        <div className="anime-poster">
                            <img className="anime-poster-img" alt={`${item.attributes.coverImage.original}`} src={item.attributes.coverImage.tiny}></img>
                        </div>

                        <div className="anime-details">
                        <Link to={ item.id }>
                            <h3 className="anime-name">{item.attributes.titles.en}</h3>
                        </Link>
                            <span className="episode-count">Episode Count: {item.attributes.episodeCount}</span>
                        </div>    
                    </li>
                </ul>
            </div>
        ))
      }
    </div>
  )
}

export default NestedComponent