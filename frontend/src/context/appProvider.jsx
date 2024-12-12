/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import AppContext from './appContext'

export  function AppProvider({ children }) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('http://localhost:3004/movies')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMovies(data.movies)
            })
    }, [])

    const values = {
        movies,
        setMovies,
    }

    return(
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )

}