const express = require('express')
const port = process.env.PORT
const app = express()
app.get('/', (request, response) => {
    response.send('Hello Heroku World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })