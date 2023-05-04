const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('dist'))

app.get('*', (request, response) => {
  response.sendFile(`${__dirname}/dist/index.html`)
})

app.listen(port, () => {
  console.debug(`App listening on port ${port}`)
})
