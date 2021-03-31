const passport = require('koa-passport')
const passportConfig = require('../lib/passpord-config')

passportConfig(passport)

module.exports = passport.initialize()