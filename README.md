
Read/Write xlsx file.
This is based on https://github.com/stephen-hardy/xlsx.js

and for one test script on  https://github.com/feugy/xlsx.js 

./samples/sample-read.coffee and sample-save.coffee are sample scripts.

./sample2 is sample in web page.  

tarvis : [![Build Status](https://secure.travis-ci.org/katoy/node-xlsx.png)](http://travis-ci.org/katoy/node-xlsx)  


Demo:
------

http://homepage2.nifty.com/youichi_kato/src/github/node-xlsx/sample2/index1.html

http://homepage2.nifty.com/youichi_kato/src/github/node-xlsx/sample2/index2.html


Settings:
------------

    $ npm install
    $ git config diff.xlsx.textconv strings

See [http://www.kernel.org/pub/software/scm/git/docs/gitattributes.html](http://www.kernel.org/pub/software/scm/git/docs/gitattributes.html) for diff on github.  

Checking
----------

    $npm test

Cake:
------------

    $ cake
	Cakefile defines the following tasks:
	
	cake build                # build coffee scripts into js
	cake lint                 # lint coffee scripts
	cake doc                  # generate documents
	cake clean:all            # clean pervious built js files and documents
	cake clean:js             # clean pervious built js files
	cake clean:doc            # clean pervious built documents
	cake test                 # do test
	cake test2_node           # do test2_node
	cake test2_node_tap       # do test2_node_tap
	cake test2_phantomjs      # do test2_phantomjs
	cake coverage             # do coverage
	
	  -w, --watch        continually build
 	 -f, --force        clean all files in output folder whatever they're compilation outputs or anything else
 	 -r, --rebuild      do relative cleaning tasks before build js or generate documents


Sample run in Browser:
-----------------------

    $ cd samples2
    $ ./make_js_for_browser.sh
    
    
And Open samples2/index1.html, or samples2/index2.html in firefox or chrome.  
On index1.html, Edit the table, press [save], it will generate xlsx file,  
On index2.html, Select or Drop xlsx file(s), it show the content on the web page.  
(no nees server, it works on server-side)  

Sample run in CLI:
------------------

    $ cd samples
    $ coffee sample-read.js

    
This script reads testdata/Formating.js and show parsed results in json format.
    
    $ coffee sample-read.coffee 
        {
        "worksheets": [
            {
                "name": "Sheet1",
                "data": [
                    [
                        {
                            "value": "Dates, all 24th November 2006",
                            "formatCode": "GENERAL"
                        }
                    ],
                    [
                        {
                            "value": "dd/mm/yyyy",
                            "formatCode": "GENERAL"
                        },
                        {
                            "value": 39045,
                            "formatCode": "YYYY/MM/DD"
                        }
                    ],
                    [
                        {
                            "value": "yyyy/mm/dd",
                            "formatCode": "GENERAL"
                        },
                        {
                            "value": 39045,
                            "formatCode": "YYYY/MM/DD"
                        }
                    ],
                    [
                        {
                            "value": "yyyy-mm-dd",
                            "formatCode": "GENERAL"
                        },
                        {
                            "value": 39045,
                            "formatCode": "YYYY\\-MM\\-DD"
                        }
                    ],
                    [
                        {
                            "value": "yy/mm/dd",
                            "formatCode": "GENERAL"
                        },
                        {
                            "value": 39045,
                            "formatCode": "YY/MM/DD"
                        }
                    ],
                    [
                        {
                            "value": "dd/mm/yy",
                            "formatCode": "GENERAL"
                        },
                        {
                            "value": 39045,
                            "formatCode": "D/M/YY;@"
                        }
                    ],
                    [
                        {
                            "value": "dd-mm-yy",
                            "formatCode": "GENERAL"
                        },
                        {
                            "value": 39045,
                            "formatCode": "DD\\-MM\\-YY"
                        }
                    ],
                    [
                        null,
                        {
                            "value": null,
                            "formatCode": "DD\\-MM\\-YY"
                        }
                    ],
                    [
                        {
                            "value": "Numbers, all 10.52",
                            "formatCode": "GENERAL"
                        }
                    ],
                    [
                        {
                            "value": "nn.nn",
                            "formatCode": "GENERAL"
                        },
                        {
                            "value": 10.52,
                            "formatCode": "GENERAL"
                        }
                    ],
                    [
                        {
                            "value": "nn.nnn",
                            "formatCode": "GENERAL"
                        },
                        {
                            "value": 10.52,
                            "formatCode": "0.000"
                        }
                    ],
                    [
                        {
                            "value": "nn.n",
                            "formatCode": "GENERAL"
                        },
                        {
                            "value": 10.52,
                            "formatCode": "0.0"
                        }
                    ],
                    [
                        {
                            "value": "£nn.nn",
                            "formatCode": "GENERAL"
                        },
                        {
                            "value": 10.52,
                            "formatCode": "\\£#,##0.00"
                        }
                    ]
                ],
                "table": false,
                "maxCol": 3,
                "maxRow": 13
            },
            {
                "name": "Sheet2",
                "data": [
                    [
                        {
                            "value": 1,
                            "formatCode": "GENERAL"
                        }
                    ]
                ],
                "table": false,
                "maxCol": 2,
                "maxRow": 1
            },
            {
                "name": "Sheet3",
                "data": [
                    [
                        {
                            "value": 2,
                            "formatCode": "GENERAL"
                        }
                    ]
                ],
                "table": false,
                "maxCol": 2,
                "maxRow": 1
            }
        ],
        "data": [
            [
                [
                    {
                        "value": "Dates, all 24th November 2006",
                        "formatCode": "GENERAL"
                    }
                ],
                [
                    {
                        "value": "dd/mm/yyyy",
                        "formatCode": "GENERAL"
                    },
                    {
                        "value": 39045,
                    "formatCode": "YYYY/MM/DD"
                    }
                ],
                [
                    {
                        "value": "yyyy/mm/dd",
                        "formatCode": "GENERAL"
                    },
                    {
                        "value": 39045,
                        "formatCode": "YYYY/MM/DD"
                    }
                ],
                [
                    {
                        "value": "yyyy-mm-dd",
                        "formatCode": "GENERAL"
                    },
                    {
                        "value": 39045,
                        "formatCode": "YYYY\\-MM\\-DD"
                    }
                ],
                [
                    {
                        "value": "yy/mm/dd",
                        "formatCode": "GENERAL"
                    },
                    {
                        "value": 39045,
                        "formatCode": "YY/MM/DD"
                    }
                ],
                [
                    {
                        "value": "dd/mm/yy",
                        "formatCode": "GENERAL"
                    },
                    {
                        "value": 39045,
                        "formatCode": "D/M/YY;@"
                    }
                ],
                [
                    {
                        "value": "dd-mm-yy",
                        "formatCode": "GENERAL"
                    },
                    {
                        "value": 39045,
                        "formatCode": "DD\\-MM\\-YY"
                    }
                ],
                [
                    null,
                    {
                        "value": null,
                        "formatCode": "DD\\-MM\\-YY"
                    }
                ],
                [
                    {
                        "value": "Numbers, all 10.52",
                        "formatCode": "GENERAL"
                    }
                ],
                [
                    {
                        "value": "nn.nn",
                        "formatCode": "GENERAL"
                    },
                    {
                        "value": 10.52,
                        "formatCode": "GENERAL"
                    }
                ],
                [
                    {
                        "value": "nn.nnn",
                        "formatCode": "GENERAL"
                    },
                    {
                        "value": 10.52,
                        "formatCode": "0.000"
                    }
                ],
                [
                    {
                        "value": "nn.n",
                        "formatCode": "GENERAL"
                    },
                    {
                        "value": 10.52,
                        "formatCode": "0.0"
                    }
                ],
                [
                    {
                        "value": "£nn.nn",
                        "formatCode": "GENERAL"
                    },
                    {
                        "value": 10.52,
                        "formatCode": "\\£#,##0.00"
                    }
                ]
            ],
            [
                [
                    {
                        "value": 1,
                        "formatCode": "GENERAL"
                    }
                ]
            ],
            [
                [
                    {
                        "value": 2,
                        "formatCode": "GENERAL"
                    }
                ]
            ]
        ],
        "zipTime": 57,
        "creator": "",
        "lastModifiedBy": "",
        "created": null,
        "modified": null,
        "activeWorksheet": 0,
        "processTime": 3
    }


    $ node sampel-save.js

This script makes simple excel workbook and saves to testdata/save.xlsx.

You can open save.xlsx using Open-Office or NeoOffice. 
(I am working on Mac, and I have no MS-Excel.)


    $ zcoffee sample-xlsx2csv.coffee
    
    ┌───────────────────────────────┬───────┐
    │ Dates, all 24th November 2006 │
    ├───────────────────────────────┼───────┤
    │ dd/mm/yyyy                    │ 39045 │
    ├───────────────────────────────┼───────┤
    │ yyyy/mm/dd                    │ 39045 │
    ├───────────────────────────────┼───────┤
    │ yyyy-mm-dd                    │ 39045 │
    ├───────────────────────────────┼───────┤
    │ yy/mm/dd                      │ 39045 │
    ├───────────────────────────────┼───────┤
    │ dd/mm/yy                      │ 39045 │
    ├───────────────────────────────┼───────┤
    │ dd-mm-yy                      │ 39045 │
    ├───────────────────────────────┼───────┤
    │                               │       │
    ├───────────────────────────────┼───────┤
    │ Numbers, all 10.52            │
    ├───────────────────────────────┼───────┤
    │ nn.nn                         │ 10.52 │
    ├───────────────────────────────┼───────┤
    │ nn.nnn                        │ 10.52 │
    ├───────────────────────────────┼───────┤
    │ nn.n                          │ 10.52 │
    ├───────────────────────────────┼───────┤
    │ £nn.nn                        │ 10.52 │
    └───────────────────────────────┴───────┘
    ┌───────────────────────────────┬───────┐
    │ Dates, all 24th November 2006 │
    ├───────────────────────────────┼───────┤
    │ dd/mm/yyyy                    │ 39045 │
    ├───────────────────────────────┼───────┤
    │ yyyy/mm/dd                    │ 39045 │
    ├───────────────────────────────┼───────┤
    │ yyyy-mm-dd                    │ 39045 │
    ├───────────────────────────────┼───────┤
    │ yy/mm/dd                      │ 39045 │
    ├───────────────────────────────┼───────┤
    │ dd/mm/yy                      │ 39045 │
    ├───────────────────────────────┼───────┤
    │ dd-mm-yy                      │ 39045 │
    ├───────────────────────────────┼───────┤
    │                               │       │
    ├───────────────────────────────┼───────┤
    │ Numbers, all 10.52            │
    ├───────────────────────────────┼───────┤
    │ nn.nn                         │ 10.52 │
    ├───────────────────────────────┼───────┤
    │ nn.nnn                        │ 10.52 │
    ├───────────────────────────────┼───────┤
    │ nn.n                          │ 10.52 │
    ├───────────────────────────────┼───────┤
    │ £nn.nn                        │ 10.52 │
    ├───────────────────────────────┼───────┤
    │ 1                             │
    └───────────────────────────────┴───────┘
    ┌───────────────────────────────┬───────┐
    │ Dates, all 24th November 2006 │
    ├───────────────────────────────┼───────┤
    │ dd/mm/yyyy                    │ 39045 │
    ├───────────────────────────────┼───────┤
    │ yyyy/mm/dd                    │ 39045 │
    ├───────────────────────────────┼───────┤
    │ yyyy-mm-dd                    │ 39045 │
    ├───────────────────────────────┼───────┤
    │ yy/mm/dd                      │ 39045 │
    ├───────────────────────────────┼───────┤
    │ dd/mm/yy                      │ 39045 │
    ├───────────────────────────────┼───────┤
    │ dd-mm-yy                      │ 39045 │
    ├───────────────────────────────┼───────┤
    │                               │       │
    ├───────────────────────────────┼───────┤
    │ Numbers, all 10.52            │
    ├───────────────────────────────┼───────┤
    │ nn.nn                         │ 10.52 │
    ├───────────────────────────────┼───────┤
    │ nn.nnn                        │ 10.52 │
    ├───────────────────────────────┼───────┤
    │ nn.n                          │ 10.52 │
    ├───────────────────────────────┼───────┤
    │ £nn.nn                        │ 10.52 │
    ├───────────────────────────────┼───────┤
    │ 1                             │
    ├───────────────────────────────┼───────┤
    │ 2                             │
    └───────────────────────────────┴───────┘

This scrit conver xlsx to table in plain-text.  



testdata/Formatting.js is https://github.com/apache/poi/blob/trunk/test-data/spreadsheet/Formatting.xlsx .

CakeFile and package.js are based at https://github.com/whitetrefoil/Xlsx2Json_node .


Running Test
============

    $ cake test
	
	1..6
	ok 1 The library file should exist
	ok 2 The functions should be accessible: decode
	ok 3 The functions should be accessible: encode
	ok 4 When convert to memory, the json object should be converted successfully
	ok 5 When convert to memory, the json object should be same as what loads from JSON file
	ok 6 Write XLSX  should same as in testref/save.xlsx
	# tests 6
	# pass 6
	# fail 0
	OK: finished
	
	
	$ cake test2_node
	
	Testing /Users/youichikato/github/node-xlsx/test2/js/browser_xlsx.js ...
	done
	Assertions:
	┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━┓
	┃ Module                                 ┃ Test                                   ┃ Assertion                              ┃ Result ┃
	┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋━━━━━━━━┫
	┃ browser_xlsx                           ┃ GET save.xlsx                          ┃ GET Request to Google.com succeeded!   ┃ ok     ┃
	┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋━━━━━━━━┫
	┃                                        ┃ GET Firmatting.xlsx                    ┃ GET Request to Google.com succeeded!   ┃ ok     ┃
	┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┻━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┻━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┻━━━━━━━━┛
	Tests:
	┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━┓
	┃ Module                                 ┃ Test                                   ┃ Failed ┃ Passed ┃ Total  ┃
	┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋━━━━━━━━╋━━━━━━━━╋━━━━━━━━┫
	┃ browser_xlsx                           ┃ GET save.xlsx                          ┃ 0      ┃ 1      ┃ 1      ┃
	┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋━━━━━━━━╋━━━━━━━━╋━━━━━━━━┫
	┃                                        ┃ GET Firmatting.xlsx                    ┃ 0      ┃ 1      ┃ 1      ┃
	┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┻━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┻━━━━━━━━┻━━━━━━━━┻━━━━━━━━┛
	Summary:
	┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━┓
	┃ File                                               ┃ Failed   ┃ Passed   ┃ Total    ┃ Runtime  ┃
	┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋━━━━━━━━━━╋━━━━━━━━━━╋━━━━━━━━━━╋━━━━━━━━━━┫
	┃ ...ikato/github/node-xlsx/test2/js/browser_xlsx.js ┃ 0        ┃ 2        ┃ 2        ┃ 96       ┃
	┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┻━━━━━━━━━━┻━━━━━━━━━━┻━━━━━━━━━━┻━━━━━━━━━━┛
	Global summary:
	┏━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━━┓
	┃ Files      ┃ Tests      ┃ Assertions ┃ Failed     ┃ Passed     ┃ Runtime    ┃
	┣━━━━━━━━━━━━╋━━━━━━━━━━━━╋━━━━━━━━━━━━╋━━━━━━━━━━━━╋━━━━━━━━━━━━╋━━━━━━━━━━━━┫
	┃ 1          ┃ 2          ┃ 2          ┃ 0          ┃ 2          ┃ 96         ┃
	┗━━━━━━━━━━━━┻━━━━━━━━━━━━┻━━━━━━━━━━━━┻━━━━━━━━━━━━┻━━━━━━━━━━━━┻━━━━━━━━━━━━┛
	OK: finished
	
	
	$ cake test2_node_tap
	# test: GET save.xlsx
	ok 1 - GET Request to Google.com succeeded!
	# test: GET Firmatting.xlsx
	ok 2 - GET Request to Google.com succeeded!
	1..2
	OK: finished
	
History
-------

2013-02-16  Follow xlsx.js 2.2.0  
2012-10-27  Follow xlsx.js 2.0.0
