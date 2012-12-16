var qunit = require('qunit');

qunit.run({
    code: {

		// Include the source code
		path: './test2/js/browser_xlsx.js',
                deps: [
                      "./js/qunit.js",
                      "./js/jquery.js",
                      "./js/base64.js",
                      "./js/jszip.js",
                      "./js/jszip-load.js",
                      "./js/jszip-inflate.js",
                      "./js/jszip-deflate.js"],
            
		// What global var should it introduce for your tests?
		//namespace: 'xlsx'

    },
    tests: [

		// Include the test suite(s)
		'test00-node.js'

    ].map(function (v) { return './test2/' + v; })
});
