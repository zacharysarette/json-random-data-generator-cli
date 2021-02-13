const fs = require('fs')

module.exports = ({ fileName, jsonString }) => {
  console.log('Going to write into existing file')
  fs.writeFile(fileName, jsonString, (err) => {
    if (err) {
      return console.error(err)
    }
    return console.log(
      require('chalk').green.inverse('Data written successfully!')
    )
  })
}
