const express = require('express')
const oneLinerJoke = require('one-liner-joke')
const port = 3000
const app = express9

app.get('/, (req, res)') => {
    const jokes = oneLinerJoke.getAllJokesWithTag('IT')
    res.send('jokes.map' => (j j.body).join (';))
    console.log('jokes')
}

app.get'/joke', ( => )

app.listen(port, () => 'listening on port %(port)%'