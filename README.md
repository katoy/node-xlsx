
Read/Write xslx file.
This is base on https://github.com/stephen-hardy/xlsx.js

samples/sample-read.js and sample-save.js are sample scriots.

Settins:
------------
    $ npm install

Sample run:
-----------
    $ cd samples
    $ node sampel-read.js
    
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

You can pen save.xslx using Open-Office or NeoOffice. 
(I am working on Mac, and I have no MS-Excel.)

testdata/Formatting.js is https://github.com/apache/poi/blob/trunk/test-data/spreadsheet/Formatting.xlsx .


 
