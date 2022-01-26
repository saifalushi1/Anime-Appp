/*eslint-disable react-hooks/exhaustive-deps */
/*eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import { Link } from "react-router-dom"
import { Card, CardImg, CardTitle, CardBody, CardText, CardGroup, Container} from 'reactstrap'

const MangaList = ( {nestedMangaData} ) => {
console.log(nestedMangaData)
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
                  <Link to={ `/manga/${item.mal_id}` }>
                      { item.title_english ? item.title_english : item.title }
                    </Link>
                  </CardTitle>
                  <CardText>
                    <small className="text-muted">
                    Volumes: { checkManga(item)}
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