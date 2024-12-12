import { useContext } from "react"
import AppContext from "../context/appContext"
/* eslint-disable react/prop-types */
export default function SeeReviewCard({review}){
    const { VoteAverage } = useContext(AppContext)
    return(
        <>
            <div className="card card-review my-3">
                <div className="card-body">
                    <p className="card-title">{review.name}</p>
                    <p className="card-subtitle mb-2 text-body-secondary">{review.text}</p>
                    <p className="card-text py-2">Recensioni: {VoteAverage(review.vote)}</p>
                    <p>{review.created_at}</p>
                </div>
            </div>

        </>
    )
}