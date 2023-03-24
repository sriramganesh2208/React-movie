import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"

import "./card.css"


const Cards = ({movie}) => {

  

    return (
    <div>
  
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="Cards">
                <img className="Cards-img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                <div className="Cards-overlay">
                    <div className="Card-title">{movie?movie.original_title:""}</div>
                    <div className="card__runtime">
                        {movie?movie.release_date:""}
                        <span className="card__rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>
    
    </div>
    )
}

export default Cards