var JSZip, data64, filename, fs, workbook, xlsx;

var Table = require("cli-table");

JSZip = require('node-zip');

fs = require('fs');

xlsx = require('../lib/xlsx');

filename = "./testdata/Formatting.xlsx";

if (process.argv[2]) {
  filename = process.argv[2];
}

data64 = fs.readFileSync(filename, "base64");

workbook = xlsx.decode(data64);

// console.log(JSON.stringify(workbook, null, 4));

var table = new Table();

for (var i = 0; i < workbook.data.length; i++) {    
    sheet = [];
    for (var j = 0; j < workbook.data[i].length; j++) {        
        row = [];
        if (workbook.data[i][j]) {
            for (var k = 0; k < workbook.data[i][j].length; k++) {            
                var c = workbook.data[i][j][k];
                if (c && c.value) {                
                    row.push(c.value);
                } else {
                    row.push("");
                }                
            }
        }
        table.push(row);
    }
    console.log(table.toString());
}

