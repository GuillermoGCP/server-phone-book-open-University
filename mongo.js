require('dotenv').config()
const connectDB = require('./src/db/config')
const Person = require('./src/db/models/PersonsModel')
const generateRandomId = require('./src/utils/generateRandomId')
const mongoose = require('mongoose')

const arg = process.argv.slice(2)
const id = generateRandomId()

connectDB(
    `${process.env.MONGO_URI_PART1}${arg[0]}${process.env.MONGO_URI_PART2}`
)

const person = new Person({ name: arg[1], number: arg[2], id: id })
if (arg[0] && !arg[1]) {
    Person.find({}).then((persons) => {
        const list = persons
            .map((person) => {
                return `${person.name} ${person.number}`
            })
            .join('\n')

        console.log('Phonebook:\n' + list)

        mongoose.connection.close()
    })
} else if (arg[1] && arg[2]) {
    person.save().then((result) => {
        console.log(`Added ${arg[1]} ${arg[2]} to phonebook`)
        mongoose.connection.close()
    })
} else {
    console.log('Missing params')
}
