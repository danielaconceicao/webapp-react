/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'

export default function MovieCard({movie}){
    return(
        <>
            <div className="card" /* style="width: 18rem;" */>
                <div className="card-body">
                    <h4 className="card-title">{movie.title}</h4>
                    <span className="card-subtitle mb-2 text-body-secondary">{movie.author}</span>
                    <p className="card-text">{movie.overview}</p>
                    <Link to={`/movies/${movie.id}`} className="card-link">see review</Link>
                </div>
            </div>
        </>
    )
}