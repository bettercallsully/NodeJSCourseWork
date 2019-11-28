const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug');

app.get('/superheroes/', (req, res) => {
    const superheroes = [
      { name: 'SPIDER-MAN', image: 'download.jpg' },
      { name: 'CAPTAIN MARVEL', image: 'download.jpg' },
      { name: 'HULK', image: 'download.jpg' },
      { name: 'THOR', image: 'download.jpg' },
      { name: 'IRON MAN', image: 'download.jpg' },
      { name: 'DAREDEVIL', image: 'download.jpg' },
      { name: 'BLACK WIDOW', image: 'download.jpg' },
      { name: 'CAPTAIN AMERICA', image: 'download.jpg' },
      { name: 'WOLVERINE', image: 'download.jpg' },
    ];
  
    res.render('index', { superheroes: superheroes });
  });

  each; superheroe in superheroes
  div.superheroe-container
    img(src='/img/superheroes/' + superheroe.image)
    h3= superheroe.name

app.use(express.static('public'));

app.listen(port, () => console.log(`Listening on port ${port}!`))
