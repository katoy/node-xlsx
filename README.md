
Read/Write xlsx file.
This is base on https://github.com/stephen-hardy/xlsx.js

samples/sample-read.coffee and sample-save.coffee are sample scripts.

tarvis : [![Build Status](https://secure.travis-ci.org/katoy/node-xlsx.png)](http://travis-ci.org/katoy/node-xlsx)  


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

Sample run ib CLI:
------------------

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

