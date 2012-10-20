# Refer:
# 1. https://github.com/twilson63/cakefile-template/blob/master/Cakefile
# 2. https://github.com/jashkenas/docco/blob/master/Cakefile

# Requirements

fs = require 'fs'
path = require 'path'
util = require 'util'
{spawn, exec} = require 'child_process'

try2require = (name) ->
  try
    lib = require name
  catch e
    error "module `#{name}` is required to do force clean."
    error "use npm to install/link `#{name}`"
    error 'Aborted!'
    process.exit(1)
  lib

# Paths
files = [
  'lib',
  'bin',
  'docs',
  'src'
]

jsInput = 'src'
jsOutput = 'lib'
docOutput = 'docs'

for f in files
  isExt = fs.exists f
  unless isExt
    mkdirp = try2require 'mkdirp'
    mkdirp f


# ANSI Terminal Colors
bright = '\x1b[0;1m'
green = '\x1b[0;1;32m'
reset = '\x1b[0m'
red = '\x1b[0;1;31m'


try
  which = require('which').sync
catch err
  if process.platform.match(/^win/)?
    error 'the `which` module is required for windows\ntry: npm install which'
  which = null

# Arguments
option '-w', '--watch', 'continually build'
option '-f', '--force', 'clean all files in output folder whatever they\'re compilation outputs or anything else'
option '-r', '--rebuild', 'do relative cleaning tasks before build js or generate documents'

# Tasks
task 'build', 'build coffee scripts into js', (options) -> build(options)
task 'lint', 'lint coffee scripts', (options) -> lint(options)
task 'doc', 'generate documents', (options) -> doc(options)
task 'clean:all', 'clean pervious built js files and documents', (options) -> clean 'all', options.force
task 'clean:js', 'clean pervious built js files', (options) -> clean 'js', options.force
task 'clean:doc', 'clean pervious built documents', (options) -> clean 'doc', options.force
task 'test', 'do test', -> test()

# Task Functions
build = (options) ->
  clean 'js' if options.rebuild
  try
    coffeePath = which 'coffee'
  catch e
    error 'cannot find executable `coffee`'
    error 'check which coffee'
    return
  coffee = spawn coffeePath, ['-c' + (if options.watch then 'w' else ''), '-o', jsOutput, jsInput]
  coffee.stdout.on 'data', (data) -> puts data
  coffee.stderr.on 'data', (data) -> error data
  coffee.on 'close', -> success 'building finished'

lint = (options) ->
  try
    coffeePath = which 'coffee'
  catch e
    error 'cannot find executable `coffee`'
    error 'check which coffee'
    return
  coffee = spawn coffeePath, ['-l', jsInput]
  coffee.stdout.on 'data', (data) -> puts data
  coffee.stderr.on 'data', (data) -> error data
  coffee.on 'close', -> success 'finished'

doc = (options) ->
  clean 'doc' if options.rebuild
  try
    doccoPath = which 'docco'
  catch e
    error 'cannot fild executable `docco`'
    error 'check which docco'
    return
  test = path.normalize(jsInput.concat('/*.coffee'))
  puts test
  docco = spawn doccoPath, ['-o', docOutput, test]
  docco.stdout.on 'data', (data) -> puts data
  docco.stderr.on 'data', (data) -> error data
  docco.on 'close', ->
    fs.unlink '-p'
    success 'building finished'

clean = (target = 'all', isForce = false) ->
  if isForce
    rimraf = try2require 'rimraf'
    if target is 'js' or 'all'
      rimraf.sync jsOutput
      fs.mkdir jsOutput
    if target is 'doc' or 'all'
      rimraf.sync docOutput
      fs.mkdir docOutput
    success 'OK, now anything in output folder has gone...'
  else
    fs.readdir jsInput, (e, files) ->
      if e?
        error e
        return
      else
        for f in files
          continue unless path.extname(f) is '.coffee'
          if target is 'js' or 'all'
            jp = path.join jsOutput, f.substring(0, path.basename(f).length - path.extname(f).length) + '.js'
            fs.exists jp, (isExt) ->
              puts "Deleting #{jp}"
              if isExt then fs.unlink jp
          if target is 'doc' or 'all'
            dp = path.join docOutput, f.substring(0, path.basename(f).length - path.extname(f).length) + '.html'
            fs.exists dp, (isExt) ->
              puts "Deleting #{dp}"
              if isExt then fs.unlink dp

test = () ->
  try
    mochaPath = which 'mocha'
  catch e
    error 'cannot find executable `mocha`'
    error 'check which coffee'
    return
  mocha = spawn mochaPath, ["--compilers", "coffee:coffee-script", "--reporter", "tap"]
  mocha.stdout.on 'data', (data) -> puts data
  mocha.stderr.on 'data', (data) -> error data
  mocha.on 'close', -> success 'finished'

# Helper Functions
puts = (data) ->
  _output data, bright

error = (data) ->
  _output data, red, 'ERR'

success = (data) ->
  _output data, green, 'SCC'

fail = (data) ->
  _output data, red, 'FAIL'

pass = (data) ->
  _output data, green, 'PASS'

_output = (data, color, prefix) ->
  data = data.toString().trim() unless typeof data is 'string'
  util.print color
  if prefix?
    util.print "#{prefix}: "
    util.print bright
  util.puts data
  util.print reset

_cleanFiles = () ->
