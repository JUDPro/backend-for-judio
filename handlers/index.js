const bodyParser = require('./body-parser')
const errors = require('./errors')
const passpordInit = require('./passport-init')

module.exports = [
    bodyParser,
    errors,
    passpordInit
]