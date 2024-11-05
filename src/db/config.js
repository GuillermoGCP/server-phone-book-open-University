const mongoose = require('mongoose')

const connectDB = async (uri) => {
    try {
        const conn = await mongoose.connect(uri, {
            dbName: 'Open-University',
        })
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Conection error: ${error.message}`)
    }
}

module.exports = connectDB
