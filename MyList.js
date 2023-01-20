// const myListURL = () => {
//     fetch('https://striveschool-api.herokuapp.com/api/movies/63ca855b17ea7800152ebfbc')
// }

const url = "https://striveschool-api.herokuapp.com/api/movies";
window.onload = () => {
    getData();
}

const getData = async () => {
    try {
    let res = await fetch (url, {
        "headers": {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzJiN2U3MzczODAwMTUzNzQzNzQiLCJpYXQiOjE2NzQyMTU1NjAsImV4cCI6MTY3NTQyNTE2MH0.y0hZ_qIZ72Oxv9jN1dbn8rmFCyO4jh0K6Y40_1dFdds"
        },
    });
    
    if(res.ok) {
        let data = await res.json()
        console.log(data);
    }
    } catch(error) {
        console.log(error);
    }
}

// let myMovie = 
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

//POST is used for CREATING new resources = POST is used for adding new movies to MyList:
// const handleNewMovie = () => {  fetch('https://striveschool-api.herokuapp.com/api/movies', {
//     method: 'POST',
//     body: JSON.stringify(myMovie),
//     headers: new Headers({
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzJiN2U3MzczODAwMTUzNzQzNzQiLCJpYXQiOjE2NzQyMTU1NjAsImV4cCI6MTY3NTQyNTE2MH0.y0hZ_qIZ72Oxv9jN1dbn8rmFCyO4jh0K6Y40_1dFdds',
//     })
// })
// }