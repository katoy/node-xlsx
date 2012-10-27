
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

describe 'Write XLSX ', ->
  xlsx = require libPath
  workbook =
    worksheets: [] # empty worksheet (array)
    data: []
    creator: "Kato Youicho"
    created: new Date("2012-10-10")
    lastModifiedBy: "Larry Jones"
    modified: new Date("2012-10-11")
    activeWorksheet: 0

  #--- Build Sheet 1
  sheet1 = []
  sheet1.name = "sheet_1"
  data1 = [[10, "ABC"], [-10, "あいう"], [1.234, new Date("2012-10-12")]]
  sheet1.data = data1

  #--- Build Sheet 2
  sheet2 = []
  sheet2.name = "sheet_2"
  data2 = [[9999, "AAAAA"]]
  sheet2.data = data2

  #--- Build workbook
  workbook.worksheets.push sheet1
  workbook.worksheets.push sheet2
  workbook.data.push [data1, data2]
  workbook.created = new Date("2012-10-13")
  workbook.modified = new Date("2012-10-14")

  # save
  fs.mkdir "test/testout"
  encodedData = xlsx.encode(workbook)
  binaryData = new Buffer(encodedData["base64"], "base64")
  fs.writeFileSync "test/testout/save.xlsx", binaryData

  it 'should same as in testref/save.xlsx', ->
    # helper.compareXLSX("test/testout/save.xlsx", "test/testref/save.xlsx").should.be.equal true

    book = xlsx.decode fs.readFileSync("test/testout/save.xlsx", "base64")
    book.worksheets[0].name.should.be.equal "sheet_1"
    book.worksheets[0].data[0][0].value.should.be.equal 10
    book.worksheets[0].data[0][1].value.should.be.equal "ABC"
    book.worksheets[0].data[1][0].value.should.be.equal -10
    # book.worksheets[0].data[1][1].value.should.be.equal "あいう"

    book.worksheets[0].data[2][0].value.should.be.equal 1.234
    book.worksheets[0].data[2][1].value.should.be.equal 41194.375

    book.worksheets[1].name.should.be.equal "sheet_2"
    book.worksheets[1].data[0][0].value.should.be.equal 9999
    book.worksheets[1].data[0][1].value.should.be.equal "AAAAA"

    # Access data[sheet][row][col]
    # console.log JSON.stringify(data.data, null, 4)
    book.data[0][0][0].value.should.be.equal 10
    book.data[0][0][1].value.should.be.equal "ABC"
    book.data[0][1][0].value.should.be.equal -10
    # book.data[0][1][1].should.be.equal "あいう"
    book.data[0][2][0].value.should.be.equal 1.234
    book.data[0][2][1].value.should.be.equal 41194.375

    book.data[1][0][0].value.should.be.equal 9999
    book.data[1][0][1].value.should.be.equal "AAAAA"
