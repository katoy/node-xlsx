$(window).load(function() {
    $('#save').on('click', function() {
        var wb = {
            worksheets: [], // worksheets has one empty worksheet (array)
            data: [],
            creator: 'John Smith',
            created: new Date(),
            lastModifiedBy: 'Youichi Kato',
            modified: new Date(),
            activeWorksheet: 0
        },
        sheet1 = {
            name : $('#WName').val(),
            data: []
        };
        var cells = [];
        $('#Worksheet1').find('tr').each(function() {
            var r = cells.push([]) - 1; // index of current row
            $(this).find('input').each(function() { cells[r].push(this.value); });
        });
        
        sheet1.data = cells;
        
        wb.worksheets.push(sheet1);
        wb.data = [cells];
        window.location = xlsx.encode(wb).href();
    });

    function handleFileSelect(evt) {
        
            var files, output = [];
        if (evt.target) {
            files = evt.target.files;
        }
        if (evt.dataTransfer) {
            evt.stopPropagation();
            evt.preventDefault();
            files = evt.dataTransfer.files;
        }
        
        // files is a FileList of File objects. List some properties.
        for (var i = 0, f; f = files[i]; i++) {
            render_file(f);
        }
    }
    
        function render_file(f) {
            var ans = "";
            var name = f.name;
            if (name.lastIndexOf(".xlsx") === name.length - 5) {
                // process image files.
                var reader = new FileReader();
                // Closure to capture the file information.
                reader.onload = (function(theFile) {
                    return function(e) {
                        var ans = [];
                        
                        var base64 = reader.result;
                        base64 = base64.substring(base64.indexOf("base64,") + 7);
                        //var str = base64decode(base64);
                        //base64 = base64encode(str);
                        
                        //alert(base64);
                        var workbook = xlsx.decode(base64);
                        //alert(workbook);
                        
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
                })(f);
                
                // Read in the image file as a data URL.
                // reader.readAsBinaryString(f);
                reader.readAsDataURL(f);
            } else if (f.type.match('image.*')) {
                // process image files.
                var reader = new FileReader();
                // Closure to capture the file information.
                reader.onload = (function(theFile) {
                    return function(e) {
                        // Render thumbnail.
                        ans = [];
                        ans.push(
                            '<strong>', escape(name), '</strong>',
                            ' (', f.type || 'n/a', ') ',
                            f.size, ' bytes,',
                            ' last modified: ',f.lastModifiedDate.toLocaleDateString());
                        
                        ans.push(
                            "<div>",
                            '<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>',
                            "</div>");
                        
                        ans = ans.join("");
                        var div = document.createElement('div');
                        var d = document.getElementById('list').insertBefore(div, null);
                        d.innerHTML = ans;
                    };
                })(f);
                
                // Read in the image file as a data URL.
                reader.readAsDataURL(f);
            }
        };
    
    function handleDragOver(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
    };
    
    // Setup the dnd listeners.
    document.getElementById('drop_zone').addEventListener('dragover', handleDragOver, false);
    document.getElementById('drop_zone').addEventListener('drop', handleFileSelect, false);
    document.getElementById('files').addEventListener('change', handleFileSelect, false);
    document.getElementById('clean').onclick = function() {
        document.getElementById('list').innerHTML = "";
    };
    
});

