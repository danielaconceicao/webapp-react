const connection = require('../database/connection')

function index(req, res){
    const sql = `SELECT * FROM movies`

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ err: err })

        res.json({
            movies: results
        })
    })
}

function show(req, res){

    const id = req.params.id
    const sql = `SELECT * FROM movies WHERE id = ?`
    const reviewsSql = `SELECT * FROM reviews WHERE movie_id = ?`
    
    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ err: err })
        if (results.length === 0) return res.status(404).json({ err: 'movie not found' })

        connection.query(reviewsSql, [id], (err, resultsReview) => {
            if (err) return res.status(500).json({ err: err })

            const movie = {
                ...results[0],
                reviews: resultsReview
            }

            res.json(movie)
        })
    })
}

function create(req, res){
    const movie_id = Number(req.params.id)
    const {name, vote, text} = req.body
    const now = new Date()
    const reviewDate = `${now.getFullYear()}-${now.getMonth()}-${now.getDay()}`

    const sql = "INSERT INTO `reviews` SET name=?, vote=?, text=?, movie_id=?, created_at=?"

    connection.query(sql, [name, vote, text, movie_id, reviewDate], (err, results) => {
        if(err) return res.status(500).json({error: err})
        return res.status(201).json({success: true})
    })

}

module.exports = {
    index, 
    show,
    create
}