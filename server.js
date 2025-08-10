const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("Welcome to the Tourist App API!");
});

app.get('/spots',(req,res) =>{
    const touristSpots = [
        {name: "Eiffel Tower", location: "Paris", ratin:4.9},
        {name: "Great Wall of China", location: "China", rating: 4.8},
        {name: "Machu Picchu", location: "Peru", rating: 4.7},
        {name: "Grand Canyon", location: "USA", rating: 4.6}
    ];
    res.json(touristSpots);
});

app.listen(3000,()=> {
    console.log("Server is running on https://localhost:3000");
});