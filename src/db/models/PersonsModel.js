const mongoose = require('mongoose')

const { Schema } = mongoose

const PersonSchema = new Schema({
    id: String,
    name: String,
    number: String,
})

const Person = mongoose.model('Person', PersonSchema)

module.exports = Person
