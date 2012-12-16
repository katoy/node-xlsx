
// See
//    http://blogs.msdn.com/b/ie_jp/archive/2011/12/27/10251132.aspx

var fs = require('fs');

xlsx = null;

function base64_encode(file) {

    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

QUnit.test('GET save.xlsx', function(){        
    QUnit.expect(1);
    QUnit.stop();
    
    var url = "test2/testdata/save.xlsx";
    var base64String = base64_encode(url);
    //alert(base64String);
            
    QUnit.ok( base64String,
              'GET Request to Google.com succeeded!'
            );

    QUnit.start();
});

QUnit.test('GET Firmatting.xlsx', function(){        
    QUnit.expect(1);
    QUnit.stop();
    
    var url = "test2/testdata/Formatting.xlsx";
    var base64String = base64_encode(url);
            
    QUnit.ok( base64String,
              'GET Request to Google.com succeeded!'
            );
    
    QUnit.start();
});
