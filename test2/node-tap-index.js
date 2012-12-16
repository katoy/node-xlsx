
var util = require("util"),
    QUnit = require('qunitjs'),    
    qunitTap = require('qunit-tap').qunitTap,
    sys = require('sys'),
    fs = require('fs');

qunitTap(QUnit, util.puts, { noPlan: true });
QUnit.init();
QUnit.config.updateRate = 0;

require('./js/browser_xlsx.js');
var content = fs.readFileSync('test2/test00-node.js', 'utf-8');
// console.log(content);
eval(content);


