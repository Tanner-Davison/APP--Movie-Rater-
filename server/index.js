const express = require('express')
const cors = require('cors')
const ctrl = require('./ctrl')

const {getAllMovies, createMovies, changeRating, deleteMovie} = ctrl;

const app = express();

//middleware
app.use(express.json())
app.use(cors())

const SERVER_PORT = 4005;

// API
app.get('/api/movies/', getAllMovies)
app.post('/api/movies', createMovies)
app.put('/api/movies/:id', changeRating)
app.delete('/api/movies/:id', deleteMovie)





app.listen(SERVER_PORT, ()=>
console.log(`Server is running on ${SERVER_PORT}`))