/*eslint-disable react-hooks/exhaustive-deps */
/*eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import { Link } from "react-router-dom"
import { Card, CardImg, CardTitle, CardBody, CardText, CardGroup, Container} from 'reactstrap'

const MangaList = ( {nestedMangaData} ) => {
console.log(nestedMangaData)
/*
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
*/
    return(

        <div>
             <h1 className="page-title">Top Manga</h1>
             <Container>
             <CardGroup>
        {
        nestedMangaData.map((item, index) => (
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
                    Volumes: { item.title === "One Piece" ? "101" : item.volumes ||
                      item.title_english === "Grand Blue Dreaming" ? "17" : item.volumes ||
                      item.title === "Kingdom" ? "63" : item.volumes
                      }
                    </small>
                  </CardText>
                </CardBody>
              </Card>
            </div>
        ))
        }
            </CardGroup>
            </Container>
    </div>
    )
}

export default MangaList