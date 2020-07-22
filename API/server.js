const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 3000;

const animals = [
    {name: "Sloth", image: "https://images.unsplash.com/photo-1576612026118-888273d58653?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},
    {name: "Snow Leopard", image: "https://images.unsplash.com/photo-1526289636136-bce3fd37f962?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},
    {name: "Giant Panda", image: "https://images.unsplash.com/photo-1591630866811-eceedf667541?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"},
    {name: "African Elephant", image: "https://images.unsplash.com/photo-1554490754-c1f912ac1b77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},
    {name: "Bald Eagle", image: "https://images.unsplash.com/photo-1506439943497-c78af0956592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},
    {name: "Emerald Tree Boa", image: "https://images.unsplash.com/photo-1474314170901-f351b68f544f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"},
    {name: "Komodo Dragon", image: "https://images.unsplash.com/photo-1580844946486-f08607088f08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"},
    {name: "Whale Shark", image: "https://images.unsplash.com/photo-1464926322190-70f42beb8250?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"},
    {name: "Cheetah", image: "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1089&q=80"},
    {name: "Siberian Tiger", image: "https://images.unsplash.com/photo-1524132989408-c8ee48d8f147?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"}
];

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/search', (req,res) => res.send( animals ))



































app.listen(port, () => console.log(`Express now departing from http://localhost:${port}`))