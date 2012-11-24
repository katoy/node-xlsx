
#### Include test framework

helper = require('./helper')

chai = require 'chai'
expect = chai.expect
chai.should()

fs = require 'fs'
JSZip = require 'node-zip'

#### Pre-define file paths

libPath = if (process.env.TEST_COV) then 'lib-cov/xlsx' else  'lib/xlsx'
inputPath  = 'test/testdata/Formatting.xlsx'
outputPath = 'test/testdata/Formatting.json'
referPath  = 'test/testref/Formatting.json'

path = require 'path'
libPath = path.join __dirname, '..', libPath
inputPath = path.join __dirname, '..', inputPath
outputPath = path.join __dirname, '..', outputPath
referPath = path.join __dirname, '..', referPath

#### Test cases

describe 'When convert to memory,', ->
  describe 'the json object', ->
    it 'should be converted successfully', ->
      xlsx = require libPath
      data64 = fs.readFileSync(inputPath, "base64")
      workbook = xlsx.decode(data64)
      if typeof workbook isnt 'object' then throw 'Output data is NOT a object'

    it 'should be same as what loads from JSON file', ->
      xlsx = require libPath
      data64 = fs.readFileSync(inputPath, "base64")

      workbook = xlsx.decode(data64)
      workbook.zipTime = 0
      workbook.processTime = 0

      rJson = require referPath
      rJson.zipTime = 0
      rJson.processTime = 0

      x = JSON.stringify(workbook, null, 4)
      y = JSON.stringify(rJson, null, 4)
      x.should.be.deep.equal y, "check json(s)"
