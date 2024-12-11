

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
                {reviews.map(review => <SeeReview key={review.id} review={review}/>)}
            </div>
        
        </>
    )
}
