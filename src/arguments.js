const chalk = require('chalk')
module.exports = require('yargs')
  .scriptName('jsonRDG-cli')
  .usage(chalk.blueBright('Usage: $0 -a string -f string -n number -c string'))
  .example(
    'jsonRDG-cli -a customerComments -f ./exports/exampleData.json -n 200 -c ./configs/exampleConfig.json'
  )
  .option('a', {
    alias: 'arrayName',
    describe: 'the name of the array of objects',
    type: 'string',
    nargs: 1
  })
  .option('n', {
    alias: 'numberOfObjectsToGenerate',
    describe: 'The number of objects to generate in the json array',
    type: 'number',
    nargs: 1
  })
  .option('f', {
    alias: 'fileName',
    describe:
      'The file name for the output file to be put in the exports folder',
    type: 'string',
    nargs: 1
  })
  .option('c', {
    alias: 'configFile',
    describe: 'The path for the config file that is in the config folder',
    type: 'string',
    nargs: 1
  }).demandOption(['a', 'n', 'f', 'c']).fail(function (msg, err, yargs) {
    if (err) throw err // preserve stack
    console.error(chalk.red('Oh no!'))
    console.error(msg)
    console.error(chalk.magentaBright('Take a look here:\n'), yargs.help())
    process.exit(0)
  }).argv
