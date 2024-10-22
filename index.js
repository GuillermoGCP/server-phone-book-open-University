const express = require('express')
const dotenv = require('dotenv/config')
const { personsRoutes } = require('./src/routes/index.js')

const app = express()
app.use(express.json())

//Routes:
app.use(personsRoutes)

//Server:
app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
)
