const mongoose = require('mongoose')
const customPhoneValidator = require('../../utils/customPhoneValidator.js')

const { Schema } = mongoose

const PersonSchema = new Schema({
    name: { type: String, minLength: 3 },
    number: {
        type: String,
        required: true,
        validate: {
            validator: customPhoneValidator,
            message: (props) =>
                `${props.value} is not a valid phone number! (e.g., 09-1234556 or 040-22334455)`,
        },
    },
})

PersonSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    },
})

module.exports = mongoose.model('Person', PersonSchema)
