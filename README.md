
Read/Write xlsx file.
This is base on https://github.com/stephen-hardy/xlsx.js

samples/sample-read.js and sample-save.js are sample scriots.

[![Build Status](https://secure.travis-ci.org/katoy/node-xlsx.png)](http://travis-ci.org/katoy/node-xlsx)  


Settins:
------------
    $ npm install

Cake:
------------
    $ cake
    Cakefile defines the following tasks:
    
    cake build                # build coffee scripts into js
    cake lint                 # lint coffee scripts
    cake doc                  # generate documents
    cake clean:all            # clean pervious built js files and documents
    cake clean:js             # clean pervious built js files
    cake clean:doc            # clean pervi    


Sample run:
-----------
    $ cd samples
    $ coffee sample-read.js

    
This script reads testdata/Formating.js and show parsed results in json format.

    $ coffee sample-read.coffee 
    {
        "worksheets": [
            [
                [
                    "Dates, all 24th November 2006"
                ],
                [
                    "dd/mm/yyyy",
                    39045
                ],
                [
                    "yyyy/mm/dd",
                    39045
                ],
                [
                    "yyyy-mm-dd",
                    39045
                ],
                [
                    "yy/mm/dd",
                    39045
                ],
                [
                    "dd/mm/yy",
                    39045
                ],
                [
                    "dd-mm-yy",
                    39045
                ],
                [
                    null
                ],
                [
                    "Numbers, all 10.52"
                ],
                [
                    "nn.nn",
                    10.52
                ],
                [
                    "nn.nnn",
                    10.52
                ],
                [
                    "nn.n",
                    10.52
                ],
                [
                    "Â£nn.nn",
                    10.52
                ]
            ],
            [
                [
                    1
                ]
            ],
            [
                [
                    2
                ]
            ]
        ],
        "zipTime": 47,
        "creator": "",
        "lastModifiedBy": "",
        "created": null,
        "modified": null,
        "activeWorksheet": 0,
        "processTime": 0
    }


    $ node sampel-save.js

This script makes simple excel wrbook and saves to testdata/save.xlsx.

You can open save.xlsx using Open-Office or NeoOffice. 
(I am working on Mac, and I have no MS-Excel.)

testdata/Formatting.js is https://github.com/apache/poi/blob/trunk/test-data/spreadsheet/Formatting.xlsx .

CakeFile and package.js are based at https://github.com/whitetrefoil/Xlsx2Json_node .
 
