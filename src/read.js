const fs = require('fs')

module.exports = ({ fileName, cb }) => {
  fs.readFile(fileName, function (err, data) {
    if (err) {
      return cb(err, 0)
    }
    return cb(null, data)
  })
}
