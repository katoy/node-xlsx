
Read/Write xlsx file.
This is base on https://github.com/stephen-hardy/xlsx.js

samples/sample-read.coffee and sample-save.coffee are sample scripts.

tarvis : [![Build Status](https://secure.travis-ci.org/katoy/node-xlsx.png)](http://travis-ci.org/katoy/node-xlsx)  


Settings:
------------
    $ npm install

checking
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
    cake clean:doc            # clean pervi    


Sample run:
-----------
    $ cd samples
    $ coffee sample-read.js

    
This script reads testdata/Formating.js and show parsed results in json format.

    $ coffee sample-read.coffee 
    
    ntsitm293174:samples youichikato$ coffee sample-read.coffee 
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
                            "value": "Â£nn.nn",
                            "formatCode": "GENERAL"
                        },
                        {
                            "value": 10.52,
                            "formatCode": "\\Â£#,##0.00"
                        }
                    ]
                ],
                "table": false
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
                "table": false
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
                "table": false
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
                        "value": "Â£nn.nn",
                        "formatCode": "GENERAL"
                    },
                    {
                        "value": 10.52,
                        "formatCode": "\\Â£#,##0.00"
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
 
History
-------

2010-10-27  Follow xlsx.js 2.0.0

