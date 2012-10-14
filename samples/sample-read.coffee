JSZip = require 'node-zip'
fs = require 'fs'
xlsx = require '../lib/xlsx'

# Read xlsx
#    $ coffee sample_read.coffee [path of xlsx]
#------------------------
filename = "./testdata/Formatting.xlsx" 
filename = process.argv[2] if process.argv[2]

data64 = fs.readFileSync(filename, "base64")
workbook = xlsx.decode(data64)

# Show as json.
console.log JSON.stringify(workbook, null, 4)
