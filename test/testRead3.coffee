
#### Include test framework

helper = require('./helper')

chai = require 'chai'
expect = chai.expect
chai.should()

fs = require 'fs'
JSZip = require 'node-zip'

#### Pre-define file paths

#  exampe.xlsx
#   see https://github.com/randym/axlsx  examples/example.rb

libPath = if (process.env.TEST_COV) then 'lib-cov/xlsx' else  'lib/xlsx'
inputPath11  = 'test/testdata/cells_import_xml_11.xlsx'
referPath11  = 'test/testref/cells_import_xml_11.json'
inputPath12  = 'test/testdata/cells_import_xml_12.xlsx'
referPath12  = 'test/testref/cells_import_xml_12.json'

path = require 'path'
libPath = path.join __dirname, '..', libPath

inputPath11 = path.join __dirname, '..', inputPath11
referPath11 = path.join __dirname, '..', referPath11
inputPath12 = path.join __dirname, '..', inputPath12
referPath12 = path.join __dirname, '..', referPath12

xlsx = require libPath

#### Test cases

describe 'When convert to memory,', ->
  describe 'the json object 11', ->
    it "should be converted successfully [#{inputPath11}]", ->
      data64 = fs.readFileSync(inputPath11, "base64")
      workbook = xlsx.decode(data64)
      if typeof workbook isnt 'object' then throw 'Output data is NOT a object'

    it "should be same as what loads from JSON file [#{inputPath11}]", ->
      data64 = fs.readFileSync(inputPath11, "base64")

      workbook = xlsx.decode(data64)
      workbook.zipTime = 0
      workbook.processTime = 0

      rJson = require referPath11
      rJson.zipTime = 0
      rJson.processTime = 0

      x = JSON.stringify(workbook, null, 4)
      y = JSON.stringify(rJson, null, 4)
      x.should.be.deep.equal y, "check json(s)"


  describe 'the json object 12', ->
    it "should be converted successfully [#{inputPath12}]", ->
      data64 = fs.readFileSync(inputPath12, "base64")
      workbook = xlsx.decode(data64)
      if typeof workbook isnt 'object' then throw 'Output data is NOT a object'

    it "should be same as what loads from JSON file [#{inputPath12}]", ->
      data64 = fs.readFileSync(inputPath12, "base64")

      workbook = xlsx.decode(data64)
      workbook.zipTime = 0
      workbook.processTime = 0

      rJson = require referPath12
      rJson.zipTime = 0
      rJson.processTime = 0

      x = JSON.stringify(workbook, null, 4)
      y = JSON.stringify(rJson, null, 4)
      x.should.be.deep.equal y, "check json(s)"
