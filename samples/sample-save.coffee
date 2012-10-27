JSZip = require("node-zip")
fs = require("fs")
xlsx = require("../lib//xlsx")
workbook =
  worksheets: []
  data: []
  creator: "Kato Youicho"
  created: new Date("2012-10-10")
  lastModifiedBy: "Larry Jones"
  modified: new Date()
  activeWorksheet: 0

#--- Build Sheet 1
sheet1 = []
sheet1.name = "sheet_1"
data1 = [[10, "ABC"], [-10, "あいう"], [1.234, new Date()]]
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
workbook.created = new Date()
workbook.modified = new Date()

#--- Encode and save
encodedData = xlsx.encode(workbook)
binaryData = new Buffer(encodedData["base64"], "base64")
filename = "testdata/save.xlsx"
fs.writeFileSync filename, binaryData
console.log "#---- Saved " + filename
