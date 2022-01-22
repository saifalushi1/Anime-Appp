// import { Link } from "react-router-dom"

// const AnimeList = ( { data } ) => {
// console.log(data)

// const sortedData = data.map((item) => {
//     return(

//         <div>
//             <ul className="ulist">
//                 <li className="item-top">
//                     <div className="ranking">
//                         <span>{data.popularityRank}</span>
//                     </div>

//                     <div className="anime-poster">
//                         <img className="anime-poster-img" alt={`${item.coverImage.original}`} src={item.coverImage.original}></img>
//                     </div>
//                     <Link to={ data.id }>
//                     <div className="anime-details">
//                         <h3 className="anime-name">{item.title.en}</h3>
//                         <span className="episode-count">{item.episodeCount}</span>
//                     </div>    
//                     </Link>
//                 </li>
//             </ul>
//         </div>
//         )

// })
//     return(
//         <div className="animeList-comp">
//         {/* {sortedData} */}
//         </div>

//     )
// }

// export default AnimeList