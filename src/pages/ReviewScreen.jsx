import { Link } from 'react-router-dom'
import SeeReview from '../components/SeeReviewCard'

export default function ReviewScreen(){
    const reviews = [
        {
            id: 1,
            username: "Federico",
            date: "2021-12-31T23:00:00.000Z",
            review: "Un libro fantastico che mi ha fatto pensare.",
            vote: 3

        },
        {
            id: 2,
            username: "Manuel",
            date: "2021-12-31T23:00:00.000Z",
            review: "Un libro fantastico che mi ha fatto pensare.",
            vote: 5

        },
        {
            id: 3,
            username: "Giorgia",
            date: "2021-12-31T23:00:00.000Z",
            review: "Un libro fantastico che mi ha fatto pensare.",
            vote: 2

        },
    ]

    return(
        <>
            <div className='container'>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                    {reviews.map(review => (<div key={review.id} className='col'><SeeReview  review={review}/> </div>))}
                </div>
                <Link to={`/`} className="card-link my-3">return home page</Link>
            </div>
        
        </>
    )
}
