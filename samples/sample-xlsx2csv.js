var JSZip, Table, c, cell_v, data64, filename, fs, i, j, k, row, table, workbook, xlsx, _i, _j, _k, _ref, _ref1, _ref2;

Table = require('cli-table');

JSZip = require('node-zip');

fs = require('fs');

xlsx = require('../lib/xlsx');

filename = "./testdata/Formatting.xlsx";

if (process.argv[2]) {
  filename = process.argv[2];
}

data64 = fs.readFileSync(filename, "base64");

workbook = xlsx.decode(data64);

for (i = _i = 0, _ref = workbook.data.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
  table = new Table();
  for (j = _j = 0, _ref1 = workbook.data[i].length; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; j = 0 <= _ref1 ? ++_j : --_j) {
    row = [];
    if (workbook.data[i][j]) {
      for (k = _k = 0, _ref2 = workbook.data[i][j].length; 0 <= _ref2 ? _k < _ref2 : _k > _ref2; k = 0 <= _ref2 ? ++_k : --_k) {
        c = workbook.data[i][j][k];
        cell_v = c && c.value ? c.value : "";
        row.push(cell_v);
      }
    }
    table.push(row);
  }
  console.log(workbook.worksheets[i].name);
  console.log(table.toString());
}
