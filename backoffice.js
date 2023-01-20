//GET https://striveschool-api.herokuapp.com/api/movies --> Array of genres (NOT MOVIES)
//GET https://striveschool-api.herokuapp.com/api/movies/[your_genre] --> Array of movies with your genre.
//POST: add movie from backoffice: https://striveschool-api.herokuapp.com/api/movies -->
            // {
            //     "_id": "63ca855b17ea7800152ebfbc",
            //     "name": "EpiHorror",
            //     "description": "Horror movie about coding 10 hours per day",
            //     "category": "horror",
            //     "imageUrl": "https://bit.ly/3cMc2IH",
            //     "userId": "63c932b7e737380015374374",
            //     "createdAt": "2023-01-20T12:13:15.924Z",
            //     "updatedAt": "2023-01-20T12:13:15.924Z",
            //     "__v": 0
            // }
//PUT: update existing: https://striveschool-api.herokuapp.com/api/movies/[movie_id]
//DELETE the movies that match the movie_id passed in the url: https://striveschool-api.herokuapp.com/api/movies/[movie_id]

//POST is used for CREATING new resources = POST is used for adding new movies to Homepage:
let response = await fetch('https://striveschool-api.herokuapp.com/api/movies', {
    method: 'POST',
    body: JSON.stringify(myObject),
    headers: new Headers({
        'Content-Type': 'application/json'
    })
})

//myObject:
// {
//     "_id": "63ca855b17ea7800152ebfbc",
//     "name": "EpiHorror",
//     "description": "Horror movie about coding 10 hours per day",
//     "category": "horror",
//     "imageUrl": "https://bit.ly/3cMc2IH",
//     "userId": "63c932b7e737380015374374",
//     "createdAt": "2023-01-20T12:13:15.924Z",
//     "updatedAt": "2023-01-20T12:13:15.924Z",
//     "__v": 0
// }