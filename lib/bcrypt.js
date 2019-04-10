const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10

/**
 * @func encrypt 
 * @param {String} 
 */
exports.encrypt = password => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
      if (err) reject(password)
      bcrypt.hash(password, salt, function(err, hash) {
        if (err) resolve(password)
        resolve(hash)
      })
    })
  })
}

/**
 * @func comparePassword - password auth 
 * @param {String} _password - compare password
 * @param {String} hash - hashing password
 */
exports.comparePassword = (_password, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(_password, hash, function(err, isMatch) {
      if (err) reject(err)
      else resolve(isMatch)
    })
  })
}
