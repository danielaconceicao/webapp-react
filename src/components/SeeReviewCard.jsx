/* eslint-disable react/prop-types */
export default function SeeReviewCard({review}){
    return(
        <>
            <div className="card" /* style="width: 18rem;" */>
                <div className="card-body">
                    <p className="card-title">{review.username}</p>
                    <p className="card-subtitle mb-2 text-body-secondary">{review.review}</p>
                    <span className="card-text">Recensioni: {review.vote}</span>
                </div>
            </div>

        </>
    )
}