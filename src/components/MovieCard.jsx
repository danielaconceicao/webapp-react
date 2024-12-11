/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'

export default function MovieCard({movie}){
    return(
        <>
            <div className="card">
                <div className="card-body card-movie">
                    <h4 className="card-title">{movie.title}</h4>
                    <span className="card-subtitle text-body-secondary">{movie.author}</span>
                    <p className="card-text">{movie.overview}</p>
                    <Link to={`/movies/${movie.id}`} className="btn btn-primary my-3">see review</Link>
                </div>
            </div>
        </>
    )
}