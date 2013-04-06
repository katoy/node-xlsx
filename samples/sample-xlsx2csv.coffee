Table = require 'cli-table'
JSZip = require 'node-zip'
fs = require 'fs'
xlsx = require '../lib/xlsx'

filename = "./testdata/Formatting.xlsx"
filename = process.argv[2]  if process.argv[2]

data64 = fs.readFileSync(filename, "base64")
workbook = xlsx.decode(data64)

# console.log(JSON.stringify(workbook, null, 4));

for i in [0 ... workbook.data.length]
  table = new Table()
  for  j in [0 ...  workbook.data[i].length]
    row = []
    if workbook.data[i][j]
      for k in [0 ... workbook.data[i][j].length]
        c = workbook.data[i][j][k]
        cell_v = if c and c.value then c.value else ""
        row.push cell_v

    table.push row

  console.log workbook.worksheets[i].name
  console.log table.toString()
