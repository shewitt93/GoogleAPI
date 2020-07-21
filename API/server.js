

const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
app.use(cors());


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/search', (req,res) => res.send('Hello'))



































app.listen(port, () => console.log(`Express now departing from http://localhost:${port}`))