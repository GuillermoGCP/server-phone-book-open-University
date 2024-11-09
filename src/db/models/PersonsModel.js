const mongoose = require('mongoose')

const { Schema } = mongoose

const PersonSchema = new Schema({
    id: String,
    name: { type: String, minLength: 3 },
    number: String,
})

PersonSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    },
})

module.exports = mongoose.model('Person', PersonSchema)
