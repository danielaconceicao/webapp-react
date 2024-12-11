import MovieCard from '../components/MovieCard'

export default function Home(){
    const movies = [
        {
            id: 1,
            title: 'Movie Title 1',
            author: 'Some Author 1',
            overview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quam.'
        },
        {
            id: 2,
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            overview: 'Gatsby, un uomo ricco e affascinante, sogna di tornare indietro nel tempo per essere con l\'amata Daisy...'
        },
        {
            id: 3,
            title: '1984',
            author: 'George Orwell',
            overview: 'Un romanzo distopico che racconta la storia di Winston Smith, un uomo che si oppone al Partito del Grande Fratello.'
        },
    ]


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