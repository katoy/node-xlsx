var JSZip = require('node-zip'),
    fs = require('fs'),
    xlsx = require('../lib//xlsx');

var workbook, sheet, r

workbook = {
  worksheets: [],
  creator: "Kato Youicho",
  created: new Date("2012-10-10"),
  lastModifiedBy: "Larry Jones",
  modified: new Date(),
  activeWorksheet: 0
};

sheet = [];
workbook.worksheets.push(sheet);
sheet.name = "sheet_1";

r = sheet.push([]) - 1;
sheet[r].push(10);
sheet[r].push("ABC");

r = sheet.push([]) - 1;
sheet[r].push(-10);
sheet[r].push("あいう");

r = sheet.push([]) - 1;
sheet[r].push(1.234);
sheet[r].push(new Date());

sheet = [];
workbook.worksheets.push(sheet);
sheet.name = "sheet_2";

r = sheet.push([]) - 1;
sheet[r].push(9999);
sheet[r].push("AAAAA");

workbook.created = new Date();
workbook.modified = new Date();

// encode and save
var encodedData = xlsx.encode(workbook);
var binaryData = new Buffer(encodedData["base64"], "base64");
var filename = "testdata/save.xlsx"
fs.writeFileSync(filename, binaryData);

console.log("#---- Saved " + filename);
