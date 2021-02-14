const jsonRDG = require('json-random-data-generator')
const chalk = require('chalk')
const params = require('./arguments')
const read = require('./read')
const write = require('./write')

const writeCB = (error) => {
  if (error === null) {
    console.log(chalk.green.inverse('File written successfully!'))
  } else {
    console.log(chalk.red.inverse('Oh no!'))
    console.error(error)
  }
}

const readCB = (error, data) => {
  if (error === null) {
    console.log(chalk.green(`Successfully read file:${params.c}`))
  } else {
    console.log(chalk.redBright(`Failed to read file:${params.c}`))
    return console.error(error)
  }

  const jsonString = JSON.parse(data.toString())

  const buildResult = jsonRDG.buildJsonStringFromConfigObject({
    configObject: jsonString,
    objectArrayName: params.a,
    numberOfObjects: params.n
  })

  console.log(chalk.green('Attempting to write to file.'))
  write({
    fileName: params.f,
    jsonString: buildResult,
    cb: writeCB
  })
}

const run = () => {
  console.log(
    chalk.cyan.inverse('Welcome to the JSON Random Data Generator CLI!')
  )
  console.log(chalk.green(`'Attempting to read file:${params.c}`))
  read({ fileName: params.c, cb: readCB })
}

run()
