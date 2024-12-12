/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import AppContext from './appContext'


export function AppProvider({ children }) {
    const [movies, setMovies] = useState([])
    const [reviews, setReviews] = useState(null)


    useEffect(() => {
        fetch('http://localhost:3004/movies')
            .then(res => res.json())
            .then(data => {
                /* console.log(data) */
                setMovies(data.movies)
            })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const fetchReviews = (id) => {
        fetch(`http://localhost:3004/movies/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data.reviews || [])
            })

        .catch(err => {
            console.log(err)
        })
    }

    const values = {
        movies,
        reviews,
        fetchReviews
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )

}