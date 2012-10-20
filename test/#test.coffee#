
#### Include test framework

chai = require 'chai'
expect = chai.expect
chai.should()

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

#### Helper functions

_generateJsonFile = (callback) ->
  {spawn} = require 'child_process'
  bin = spawn binPath, inputPath, outputPath
  bin.on 'exit', -> callback?()

_removeOutputJsonFile = (callback) ->
  fs = require 'fs'
  fs.exists outputPath, (isExisted) ->
    if isExisted then fs.unlinkSync outputPath
    callback?()

_loadOutputJsonFile = (callback) ->
  oJson = require outputPath
  callback?()

#### Test cases

JSZip = require 'node-zip'
fs = require 'fs'

describe 'The library file', ->
  it 'should exist', (done) ->
    try
      require libPath
    catch e
      throw "Library file (#{libPath}) not found"
    finally
      done()

describe 'The function', ->
  xlsx = require libPath
  it 'should be accessible: decode', ->
    (typeof xlsx.decode).should.be.equal 'function'
  it 'should be accessible: encode', ->
    (typeof xlsx.encode).should.be.equal 'function'

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
      x.should.be.deep.equal y
