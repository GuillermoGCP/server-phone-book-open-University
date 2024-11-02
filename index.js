const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv/config')
const { personsRoutes } = require('./src/routes/index.js')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Middleware: Morgan for logging requests
morgan.token('body', (req) => {
    return req.method === 'POST' ? JSON.stringify(req.body) : ''
})
app.use(
    morgan(
        ':method :url :status :res[content-length] - :response-time ms :body'
    )
)

//Routes:
app.use(personsRoutes)

//Server:
app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
)
