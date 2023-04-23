const movies = require('./db.json')
let id = 11 


module.exports = {
    getAllMovies: (req,res)=>{
        res.status(200).send(movies)
        },
    createMovies: (req,res)=>{
           
        const {title, rating, imageURL} = req.body

        const newMovie = {
            id,
            title,
            rating,
            imageURL,
        }
            movies.push(newMovie);
            id += 1
            res.status(200).send(movies)
        },
        changeRating: (req,res)=>{
            const { type }= req.body;
            const {id} = req.params;
            const index = movies.findIndex((e)=> e.id === +id)

            if(type === "plus" && movies[index].rating < 5){
                movies[index].rating +=1
                res.status(200).send(movies)
            }else if(type === "minus"&& movies[index].rating > 0){
               movies[index].rating -=1
               res.status(200).send(movies)
            }
        },
        deleteMovie: (req, res)=>{
            const {id} = req.params

            const index = movies.findIndex((e)=> e.id === +id)
            movies.splice(index,1)
            res.status(200).send(movies)
        }
}