
  
# See
#    https://github.com/feugy/xlsx.js/tree/master/test

helper = require('./helper')

assert = require('chai').assert
fs = require 'fs-extra'
path = require 'path'

#### Pre-define file paths

libPath = if (process.env.TEST_COV) then 'lib-cov/xlsx' else  'lib/xlsx'

path = require 'path'
libPath = path.join __dirname, '..', libPath

xlsx = require libPath

#### Test cases

describe "unit tests", ->
  file = path.join("test", "testout", "empty.xlsx")
  before (done) ->
    fs.remove file, (err) ->
      return done(err)  if err
      fs.createFile file, done

  it "should simple xlsx be written (you can manually check #{file})", (done) ->
    workbook = xlsx.encode(
      creator: "katoy"
      lastModifiedBy: "加藤"
      worksheets: [
        data: [[]]
        table: true
        name: "empty"
      ]
    )
    fs.writeFile file, workbook.base64, "base64", done

  it "should generated xlsx be readable (#{file})", (done) ->
    fs.readFile file, "base64", (err, content) ->
      return done(err)  if err
      workbook = xlsx.decode(content)
      assert.isNotNull workbook
      assert.deepEqual workbook.worksheets, [
        name: "empty"
        data: [[]]
        table: false
        maxCol: 0
        maxRow: 1
      ]

      assert.deepEqual workbook.creator, "katoy"
      assert.deepEqual workbook.lastModifiedBy, "加藤"
      assert.deepEqual workbook.activeWorksheet, 0
      done()
