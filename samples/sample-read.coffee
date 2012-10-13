JSZip = require 'node-zip'
fs = require 'fs'
xlsx = require '../lib/xlsx'

# Read xlsx
#------------------------
filename = "./testdata/Formatting.xlsx"
data64 = fs.readFileSync(filename, "base64")
workbook = xlsx.decode(data64)

# Show as json.
console.log JSON.stringify(workbook, null, 4)
