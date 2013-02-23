dateFormat = require 'dateformat'
fs = require 'fs-extra'
JSZip = require 'node-zip'

exports.generateJsonFile = (callback) ->
  {spawn} = require 'child_process'
  bin = spawn binPath, inputPath, outputPath
  bin.on 'exit', -> callback?()

exports.removeOutputJsonFile = (callback) ->
  fs.exists outputPath, (isExisted) ->
    if isExisted then fs.unlinkSync outputPath
    callback?()

exports.loadOutputJsonFile = (callback) ->
  oJson = require outputPath
  callback?()

exports.compareXLSX = (f1, f2) ->
  zip1 = new JSZip().load(fs.readFileSync(f1, "base64"), {base64: true})
  zip2 = new JSZip().load(fs.readFileSync(f2, "base64"), {base64: true})

  # console.log folders.length
  files1 = zip1.file /.*/
  files2 = zip2.file /.*/
  return false if files1.length != files2.length
  for f in zip1.file /.*/
    if f.name != 'docProps/core.xml'
      return false if f.data != zip2.file(f.name).data
  true
