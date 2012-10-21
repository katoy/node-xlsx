
#### Include test framework

helper = require('./helper')

chai = require 'chai'
expect = chai.expect
chai.should()

fs = require 'fs'
JSZip = require 'node-zip'

#### Pre-define file paths

libPath = 'lib/xlsx'
inputPath  = 'test/testdata/Formatting.xlsx'
outputPath = 'test/testdata/Formatting.json'
referPath  = 'test/testref/Formatting.json'

path = require 'path'
libPath = path.join __dirname, '..', libPath
inputPath = path.join __dirname, '..', inputPath
outputPath = path.join __dirname, '..', outputPath
referPath = path.join __dirname, '..', referPath

describe 'Write XSLS ', ->
  xlsx = require libPath
  workbook =
    worksheets: [] # empty worksheet (array)
    creator: "Kato Youicho"
    created: new Date("2012-10-10")
    lastModifiedBy: "Larry Jones"
    modified: new Date()
    activeWorksheet: 0

  # Shhet 1
  sheet = []
  workbook.worksheets.push(sheet)

  sheet.name= "sheet_1"
  r = sheet.push([]) - 1
  sheet[r].push 10
  sheet[r].push "ABC"

  r = sheet.push([]) - 1
  sheet[r].push -10
  sheet[r].push "あいう"

  r = sheet.push([]) - 1
  sheet[r].push 1.234
  sheet[r].push new Date()

  # Shhet 2
  sheet = []
  workbook.worksheets.push(sheet)
  sheet.name = "sheet_2"
  r = sheet.push([]) - 1
  sheet[r].push 9999
  sheet[r].push "AAAAA"

  # worbook
  workbook.created = new Date()
  workbook.modified = new Date()

  # save
  encodedData = xlsx.encode(workbook)
  binaryData = new Buffer(encodedData["base64"], "base64")
  fs.writeFileSync "test/testout/save.xlsx", binaryData

  it 'should same as in testref/save.xlsx', ->
    helper.compareXSLX("test/testout/save.xlsx", "test/testref/save.xlsx").should.be.equal true

  data = xlsx.decode fs.readFileSync("test/testout/save.xlsx", "base64")
  data.worksheets[0].name.should.be.equal "sheet_1"
  data.worksheets[0][0][0].should.be.equal "10"
  data.worksheets[0][0][1].should.be.equal "ABC"
  data.worksheets[0][1][0].should.be.equal "-10"

  # data.worksheets[0][1][1].should.be.equal "あいう"

  data.worksheets[0][2][0].should.be.equal "1.234"
  data.worksheets[0][2][1].should.be.equal "41202"

  data.worksheets[1].name.should.be.equal "sheet_2"
  data.worksheets[1][0][0].should.be.equal "9999"
  data.worksheets[1][0][1].should.be.equal "AAAAA"
