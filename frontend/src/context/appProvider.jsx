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

    function VoteAverage(vote) {/* para colocar as estrelas no filme */
        const stars = []

        for (let i = 1; i <= 5; i++) {
            stars.push(
                <i
                    key={i}
                    className={i <= vote ? "bi bi-star-fill" : "bi bi-star"}
                    style={{ color: i <= vote ? "#FFD700" : "#D3D3D3" }}
                ></i>
            )
        }

        return <>{stars}</>//renderizando os elementos jsx contidos no array stars dentro de um fragmento(os fragmentos permitem agrupar os elementos sem criar nós extras no dom ).
    }

    const values = {
        movies,
        reviews,
        fetchReviews,
        VoteAverage
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )

}