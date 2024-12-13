const express = require('express')
const router = express.Router()
const MoviesController = require('../controllers/moviesControllers')

router.get('/', MoviesController.index)

router.get('/:id', MoviesController.show)

router.post('/:id/review', MoviesController.create)

module.exports = router