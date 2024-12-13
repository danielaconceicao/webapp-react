/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from 'react-router-dom'
import SeeReview from '../components/SeeReviewCard'
import { useContext, useEffect } from 'react'
import AppContext from '../context/appContext'
import ReviewForm from '../components/ReviewForm'

export default function ReviewScreen(){
    const { reviews, fetchReviews } = useContext(AppContext)
    const { id } = useParams()

    useEffect(() => {
        if (!reviews || reviews.id !== id) {
            fetchReviews(id);
        }
    }, [id])

    if (!reviews) {
        return <p>Loading movie details...</p>
    }
    
    return(
        <>
            <div className='container'>
                <ReviewForm movie_id={id} />
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                    {reviews.map(review => (<div key={review.id} className='col'><SeeReview  review={review}/> </div>))}
                </div>
                <Link to={`/`} className="card-link my-3">return home page</Link>
            </div>
        
        </>
    )
}
