const express = require('express')
const app = express()
const port = 3000

const pages = [
  {
    path: '/',
    fileName: 'index',
  },
  {
    path: '/chats',
    fileName: 'index',
  },
  {
    path: '/profile',
    fileName: 'profile',
  },
  {
    path: '/sign-in',
    fileName: 'sign-in',
  },
  {
    path: '/sign-up',
    fileName: 'sign-up',
  },
]

app.use(express.static('dist'))

pages.forEach(({ path, fileName }) => {
  app.get(path, (request, response) => {
    response.sendFile(`${__dirname}/dist/${fileName}.html`)
  })
})

app.listen(port, () => {
  console.debug(`App listening on port ${port}`)
})
