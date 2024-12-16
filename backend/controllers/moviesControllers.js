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
    const reviewsSql = `SELECT * FROM reviews WHERE movie_id = ? ORDER BY id DESC`
    
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

//(req) => representa o objeto da requisicao HTTP(contem dados enviados pelo cliente)
//(res) => representa o objeto de resposta HTTP(usado para enviar a resposta ao cliente)
function create(req, res){
    console.log(req.params)

    const movie_id = Number(req.params.id)//extrai o valor do parametro id da url

    //destrutura os valores(name, vote, text) diretamente do corpo da req
    const {name, vote, text} = req.body//o que vai no corpo, o que vai ser pedido no form
    
    //calculando a data atual
    const now = new Date()
    const reviewDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`

    //(INSERT INTO REVIEW) => vai ta inserindo os dados na tabela reviews
    //(SET name, vote, text, movie_id, create_at) => especifica as colunas onde os valores serao inseridos
    //? => e tipo um placeholder, sao marcadores de posicao para valores
    const sql = "INSERT INTO `reviews` SET name=?, vote=?, text=?, movie_id=?, created_at=?"

    //aqui vai a constante sql o array com os valores que substituem os ? na query e uma callback que sera executada apois a query ser processada
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