const testing = require('../index.js')

const args = {}
args.dir = 'GeneralStateTests/stCallCodes'
args.forkConfig = 'Byzantium'

testing.getTestFromSource('exampledata.json', (err, testData) => {
  if (err) {
    console.log(err)
  } else {
    console.log(testData)
  }
})
