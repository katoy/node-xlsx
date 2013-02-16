
// See
//    http://blogs.msdn.com/b/ie_jp/archive/2011/12/27/10251132.aspx

xlsx = null;
$(window).load(function() {
    
    function show_xlsx(name, base64Str) {
        var ans = [];

        var decode;
        if ("undefined" != typeof module) {
            decode = module.exports.decode;
        } else {
            decode = xslx.decode;
        }

        var workbook = module.exports.decode(base64Str);

        ans.push("<br/>****** " + name + " *******<br/>");
        for (var i = 0; i < workbook.data.length; i++) {
            
            ans.push(workbook.worksheets[i].name + "<br/>");
            ans.push("<table border='1'>");
            for (var j = 0; j < workbook.data[i].length; j++) {
                
                ans.push("<tr>");
                for (var k = 0; k < workbook.data[i][j].length; k++) {
                    
                    var c = workbook.data[i][j][k];
                    if (c && c.value) {                    
                         ans.push("<td>" + c.value + "</td>");
                    }
                }
                ans.push("</tr>");
             }
            ans.push("</table>");
        }
        
        ans = ans.join("");
        var div = document.createElement('div');
        var d = document.getElementById('list').insertBefore(div, null);
        d.innerHTML = ans;  
    };

    this.show_xlsx = show_xlsx;
    
});

function getServerFileToArrayBufffer(url, successCallback) {
    // XDR オブジェクトを作成
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == xhr.DONE) {            
            if (xhr.response) {
                // 'response' プロパティが ArrayBuffer を返す
                var data = new Uint8Array(xhr.response);
                successCallback(data);
            } else {
                alert("Failed to download:" + xhr.status + " " + xhr.statusText);
                successCallback(xhr.response);
            }
        }
    };
    
    // 指定された URL へのリクエストを作成
    xhr.open("GET", url, true);
    // ArrayBuffer オブジェクトでの応答を得るため、responseType を 'arraybuffer' に設定
    xhr.responseType = "arraybuffer";
    
    xhr.send();
};

test('GET save.xlsx', function(){        
    expect(1);
    stop();
    
    var url = "testdata/save.xlsx";
    getServerFileToArrayBufffer(url, function(arrayBuffer) {
        var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer)));
        //alert(base64String);
        show_xlsx(url, base64String);
        
        ok( base64String,
            'GET Request to Google.com succeeded!'
          );

        start();
    });
});

test('GET Firmatting.xlsx', function(){        
    expect(1);
    stop();
    
    var url = "testdata/Formatting.xlsx";
    getServerFileToArrayBufffer(url, function(arrayBuffer) {
        var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer)));
        //alert(base64String);
        show_xlsx(url, base64String);
        
        ok( base64String,
            'GET Request to Google.com succeeded!'
          );

        start();
    });
});
