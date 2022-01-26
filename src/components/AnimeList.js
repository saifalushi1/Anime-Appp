/*eslint-disable react-hooks/exhaustive-deps */
/*eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardTitle, CardBody, CardText, CardGroup} from 'reactstrap'

const AnimeList = ({ nestedData  }) => {
  console.log(nestedData)
  /* 
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
                        <Link to={ `/top-anime/${item.mal_id}` }>
                            <h3 className="anime-name">{ item.title_english ? item.title_english : item.title }</h3>
                        </Link>
                            <span className="episode-count">Episode Count: { item.episodes }</span>
                        </div>    
                    </li>
                </ul>
            </div>
  */
  return (
    <div>
      <h1>Top Anime</h1>
      <CardGroup>
      {
        nestedData.map((item, index) => (
            <div key={item.mal_id}>
              <Card inverse>
                <CardImg 
                  className="anime-poster-img"
                  alt={`${item.title} poster`}
                  src={ item.images.jpg.large_image_url }
                  width="100%"
                />
                <CardBody>
                  <CardTitle tag="h5" className="anime-name">
                    <Link to={ `/top-anime/${item.mal_id}` }>
                      { item.title_english ? item.title_english : item.title }
                    </Link>
                  </CardTitle>
                  <CardText>
                    <small className="text-muted">
                    Ep: { item.episodes }
                    </small>
                  </CardText>
                </CardBody>
              </Card>
            </div>
        ))
      }
      </CardGroup>
    </div>
  )
}

export default AnimeList