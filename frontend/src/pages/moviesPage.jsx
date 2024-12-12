import MovieCard from '../components/MovieCard'
import {useContext} from 'react'
import AppContext from '../context/appContext'

export default function Home(){
    const {movies} = useContext(AppContext)

    return(
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                    {movies.map(movie => (<div key={movie.id} className="col">
                        <MovieCard movie={movie} />
                    </div>))}
                </div>

            </div>
        
        </>
    )
}