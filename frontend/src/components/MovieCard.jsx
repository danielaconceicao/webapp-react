/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'

export default function MovieCard({movie}){
    return(
        <>
            <div className="card">
                <div className="card-body card-movie">
                    <h4 className="card-title">{movie.title}</h4>
                    <span className="card-subtitle text-body-secondary">{movie.director}</span>
                    <p className="card-text py-2">{movie.genre}</p>
                    <span className="card-text">Anno: {movie.release_year}</span>
                    <p className="card-text py-2">{movie.abstract}</p>
                    <Link to={`/movies/${movie.id}`} className="btn btn-primary my-3">see review</Link>
                </div>
            </div>
        </>
    )
}