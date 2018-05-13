const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/hi', (req, res) => res.send('Hello Babita!'))

app.listen(3002, () => console.log('Example app listening on port 3000!'))