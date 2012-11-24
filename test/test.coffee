
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

describe 'The library file', ->
  it 'should exist', (done) ->
    try
      require libPath
    catch e
      throw "Library file (#{libPath}) not found"
    finally
      done()

describe 'The functions', ->
  xlsx = require libPath
  it 'should be accessible: decode', ->
    (typeof xlsx.decode).should.be.equal 'function', "check exists xlsx.decode()"
  it 'should be accessible: encode', ->
    (typeof xlsx.encode).should.be.equal 'function', "check exists xlsx.encode()"
