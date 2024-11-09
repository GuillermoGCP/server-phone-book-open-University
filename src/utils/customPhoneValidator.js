const customPhoneValidator = (value) => {
    const regex = /^\d{2,3}-\d{5,}$/
    return regex.test(value)
}
module.exports = customPhoneValidator
