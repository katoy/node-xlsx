
# See
#    https://github.com/feugy/xlsx.js/tree/master/test

helper = require('./helper')

assert = require('chai').assert
fs = require 'fs-extra'
path = require 'path'

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

xlsx = require libPath

#### Test cases

describe "unit tests", ->
  file = path.join("test", "testout", "inflate-1.xlsx")
  before (done) ->
    fs.remove file, (err) ->
      return done(err)  if err
      fs.createFile file, done

  it "should simple xlsx be written (you can manually check #{file})", (done) ->
    workbook = xlsx.encode(
      creator: "John Doe"
      lastModifiedBy: "Meg White"
      worksheets: [
        data: [["green", "white", "orange", "blue", "red"], ["1", "2", "3", "4", "5"]]
        table: true
        name: "Sheet 1"
      ]
    )
    fs.writeFile file, workbook.base64, "base64", done

  it "should generated xlsx be readable (#{file})", (done) ->
    fs.readFile file, "base64", (err, content) ->
      return done(err)  if err
      workbook = xlsx.decode(content)
      assert.isNotNull workbook
      assert.deepEqual workbook.worksheets, [
        name: "Sheet 1"
        data: [[
          value: "green"
          formatCode: "General"
        ,
          value: "white"
          formatCode: "General"
        ,
          value: "orange"
          formatCode: "General"
        ,
          value: "blue"
          formatCode: "General"
        ,
          value: "red"
          formatCode: "General"
        ], [
          value: 1
          formatCode: "General"
        ,
          value: 2
          formatCode: "General"
        ,
          value: 3
          formatCode: "General"
        ,
          value: 4
          formatCode: "General"
        ,
          value: 5
          formatCode: "General"
        ]]
        table: false
        maxCol: 5
        maxRow: 2
      ]

      assert.deepEqual workbook.creator, "John Doe"
      assert.deepEqual workbook.lastModifiedBy, "Meg White"
      assert.deepEqual workbook.activeWorksheet, 0
      done()
