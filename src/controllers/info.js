const storedPersons = require('../db/persons.json')
const info = (_req, res) => {
  const currentDate = new Date()
  const response = `<p>Phonebook has info for ${storedPersons.length} people.</p>
        <p>${currentDate}</p>`
  res.send(response)
}
module.exports = info
