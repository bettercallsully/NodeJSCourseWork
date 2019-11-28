const express = require('express')
const port = 3000
const app = express()

app.set('view engine', 'pug');

// app.use(express.static('public'))


app.get ('/', (req, res) => {
const continents = [

// { name: 'Australia'},
// { name: 'Europe'},
// { name: 'North America'},
// { name: 'South America'},
// { name: 'Africa'},
// { name: 'Asia'},
// { name: 'Antartica'},
// ];


res.render('index', {continents: continents});
});

app.listen(port, () => console.log(`Listening on port ${port}!`))