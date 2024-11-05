const express = require('express')
const path = require('path')
const morgan = require('morgan')
const dotenv = require('dotenv')
const { personsRoutes } = require('./src/routes/index.js')
const connectDB = require('./src/db/config.js')

dotenv.config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// // Connect to MongoDB
connectDB(process.env.MONGO_URI)

// Middleware: Morgan for logging requests
morgan.token('body', (req) => {
    return req.method === 'POST' ? JSON.stringify(req.body) : ''
})
app.use(
    morgan(
        ':method :url :status :res[content-length] - :response-time ms :body'
    )
)
app.use(express.static(path.join(__dirname, 'dist')))

//Routes:
app.use(personsRoutes)

//Server:
app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
)
