const fs = require('fs')

module.exports = ({ fileName, jsonString, cb }) => {
  console.log('Going to write into existing file')
  fs.writeFile(fileName, jsonString, (err) => {
    if (err) {
      return cb(err)
    }
    return cb(null)
  })
}
