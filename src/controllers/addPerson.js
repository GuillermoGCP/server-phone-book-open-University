const storedPersons = require('../db/persons.json')
const fs = require('fs/promises')

const addPerson = async (req, res) => {
    const generateRandomId = () => {
        return Math.floor(Math.random() * 1000000)
    }
    const id = generateRandomId()
    const newData = [...storedPersons, { ...req.body, id: id }]
    await fs.writeFile(
        './src/db/persons.json',
        JSON.stringify(newData, null, 2)
    )
    res.send({ data: { ...req.body, id: id } })
}
module.exports = addPerson
