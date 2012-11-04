/*
 * jQuery droparea plugin
 * Version: 2.0.0 
 * Date (d/m/y): 11/09/12
 * Original author: @gokercebeci 
 * Licensed under the MIT license
 * Demo: http://gokercebeci.com/dev/droparea
 */

(function ( $, window, document, undefined ) {

    var pluginName = 'droparea',
    methods = {
        dataURItoBlob: function(dataURI){
            // for check the original function: http://stackoverflow.com/questions/4998908/
            // convert base64 to raw binary data held in a string
            // doesn't handle URLEncoded DataURIs
            var byteString = atob(dataURI.split(',')[1]);
            // separate out the mime component
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
            // write the bytes of the string to an ArrayBuffer
            var ab = new ArrayBuffer(byteString.length);
            var ia = new Uint8Array(ab);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            // write the ArrayBuffer to a blob, and you're done
            var bb = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder)();
            bb.append(ab);
            return bb.getBlob(mimeString);
        }
    },
    defaults = {
        init        : function(){},
        start       : function(){},
        complete    : function(){},
        error       : function(){},
        instructions: 'drop a file to here',
        over        : 'drop file here!',
        nosupport   : 'No support for the File API in this web browser',
        noimage     : 'Unsupported file type!',
        uploaded    : 'Uploaded',
        maxsize     : '10', //Mb
        autoplay    : false,
        animate     : methods.animate,
        click       : methods.click,
        menu        : ['play','pause','left','right']
    };
    function Plugin( element, options ) {
        this.element = element;
        this.options = $.extend( {}, defaults, options) ;
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }
    Plugin.prototype = {
        init: function() {
            // callback
            this.options.init(this);
            this.set();
        },
        error: function(code, message){
            // callback
            this.options.error(code, message);
            if(console) console.log(code, message);
            return false;
        },
        complete: function(result, file){
            this.result = result;
            // callback
            this.options.complete(this, file);
            if(console) console.log(this.result, file);
            return false;
        },
        set: function() {
            var $this =  this;
            var el =  $(this.element);
            
            this.area = $('<div class="'+el.attr('class')+'">').insertAfter(el);
            this.instructions = $('<div>').appendTo(this.area);
            this.input = el.appendTo(this.area);
            
            if(this.input.data('value') && this.input.data('value').length)
                $('<img src="'+this.input.data('value')+'">').appendTo(this.area);
            else 
                this.instructions.addClass('instructions').html(this.options.instructions);

            // Browse file event
            this.input.change(function(e){
                $this.instructions.removeClass().empty();
                $this.traverse(e.target.files);
            });
            
            this.dragdrop();
        }, 
        dragdrop: function() {
            var $this =  this;
            // Drag events
            $(document).bind({
                dragleave: function (e) {
                    e.preventDefault();
                    if($this.input.data('value') || $this.area.find('img').length)
                        $this.instructions.removeClass().empty();
                    else
                        $this.instructions.removeClass('over').html($this.options.instructions);
                },
                drop: function (e) {
                    e.preventDefault();
                    if($this.input.data('value') || $this.area.find('img').length)
                        $this.instructions.removeClass().empty();
                    else
                        $this.instructions.removeClass('over').html($this.options.instructions);
                },
                dragenter: function (e) {
                    e.preventDefault();
                    $this.instructions.addClass('instructions over').html($this.options.over);
                },
                dragover: function (e) {
                    e.preventDefault();
                    $this.instructions.addClass('instructions over').html($this.options.over);
                }
            });
            
            // Drop file event
            this.element.addEventListener("drop", function (e) {
                e.preventDefault();
                // callback
                $this.options.start($this);
                $this.traverse(e.dataTransfer.files);
                $this.instructions.removeClass().empty();
            },false);
        },
        traverse: function(files){
            if (typeof files !== "undefined") {
                for (var i=0, l=files.length; i<l; i++) {
                    this.control(files[i]);
                }
            } else {
                return this.error(600, 'unsupported file type');
            }
        },
        control: function(file){
        	
            var tld = file.name.toLowerCase().split(/\./);
            tld = tld[tld.length -1];
            
            if (this.input.data('type') && !types.indexOf(file.type)) {
                //var types = $(area).data('type') ? $(area).data('type') : 'jpg, png, gif';
                return this.error(601, 'unsupported file type, ' + this.input.data('type') + ' accepted only');
            }
			
            // File size control
            if (file.size > (this.options.maxsize * 1048576)) {
                return this.error(602, 'max upload size: ' + this.options.maxsize + 'Mb');
            }
                        
            // If the file is an image and data-resize paramater is true, 
            // before the uploading resize the imege on browser.
            if((/image/i).test(file.type) && this.input.data('canvas')){
                //console.log('resize',file);
                this.resize(file);
            } else {
                //console.log('upload',file);
                this.upload(file);
            }
        },
        resize: function(file){
            var $this = this;
            // for using after the resize
            var name = file.name;
            // Create new objects
            var canvas = document.createElement("canvas");
            if(!canvas)
                return this.error(603, 'browser error unsupported element canvas');
                
            //$(canvas).appendTo(area);
            var img = document.createElement("img");
            var WIDTH  = 0 | this.input.data('width');
            var HEIGHT = 0 | this.input.data('height');
            // Read the file
            var reader = new FileReader();  
            reader.onloadend = function(e) { 
                img.src = e.target.result; 
                $(img).load(function(){
                    // Calculate new sizes
                    // Get dimensions
                    var width = img.width;
                    var height = img.height;
                    var crop = $this.input.data('crop');
                    //console.log('crop',crop);
                    if ((WIDTH && width > WIDTH) || (HEIGHT && height > HEIGHT)) {
                        ratio = width / height;
                        if ((ratio >= 1 || HEIGHT == 0) && WIDTH && !crop) {
                            width  = WIDTH;
                            height = (WIDTH / ratio) >> 0;
                        } else if (crop && ratio <= (WIDTH / HEIGHT)) {
                            width  = WIDTH;
                            height = (WIDTH / ratio) >> 0;
                        } else {
                            width  = (HEIGHT * ratio) >> 0;
                            height = HEIGHT;
                        }
                    }
                    // Draw new image
                    canvas.width = width;
                    canvas.height = height;
                    var ctx = canvas.getContext("2d");
                    ctx.drawImage(img, 0, 0, width, height);
                    var data = canvas.toDataURL("image/jpeg");
                    // Data checking
                    if (data.length <= 6) {
                        return $this.error(604, 'Image did not created. Please, try again.');
                    } else {
                        //console.log('data:', data)
                        // Get new file data from canvas and convert to blob
                        file = methods.dataURItoBlob(data);
                        file.name = name;
                        if($this.input.data('post')){
                            // Start upload new file
                            $this.upload(file);
                        } else {
                            $this.area.find('canvas').remove();
                            $(canvas).appendTo($this.area);
                            //$this.input.attr('disabled','disabled');
                            $('<input>',{
                                'type':'text',
                                'name':$this.input.attr('name')
                            })
                            .val(data).insertAfter($this.input);
                        }
                    }
                });
            }
            reader.readAsDataURL(file);
        },
        upload: function(file){
            var $this = this;
            $this.area.find('div').empty();
            var progress = $('<div>',{
                'class':'progress'
            });
            $this.area.append(progress);
            // Uploading - for Firefox, Google Chrome and Safari
            var xhr = new XMLHttpRequest();
            xhr.open("post", $this.input.data('post'), true);
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            // Update progress bar
            xhr.upload.addEventListener("progress", function (e) {
                if (e.lengthComputable) {
                    var loaded = Math.ceil((e.loaded / e.total) * 100);
                    progress.css({
                        'height':loaded + "%",
                        'line-height': ($this.area.height() * loaded / 100) +'px'
                    }).html(loaded + "%");
                }
            }, false);
            // File uploaded
            xhr.addEventListener("load", function (e) {
                var result = jQuery.parseJSON(e.target.responseText);
                // Calling complete function
                $this.complete(result, file);
                progress.addClass('uploaded');
                progress.html($this.options.uploaded).fadeOut('slow');
            }, false);
            // Create a new formdata
            var fd = new FormData();
            // Add optional form data
            for (var i in $this.input.data())
                if (typeof $this.input.data(i) !== "object")
                    fd.append(i, $this.input.data(i));
            // Add file data
            fd.append($this.input.attr('name'), file);
            // Send data
            xhr.send(fd);
        },
        left: function() {
            if(!this.animating){
                this.animating = true;
                if(parseInt(this.wagon.css('left')) < 0)
                    this.animate('left', (parseInt(this.wagon.css('left')) +this.step));
                else 
                    this.animate('left', 20, true);
            }
        },
        right: function() {
            if(!this.animating){
                this.animating = true;
                if(parseInt(this.wagon.css('left')) *-1 < this.way)
                    this.animate('right', parseInt(this.wagon.css('left')) -this.step);
                else if(this.options.autoplay)
                    this.animate('left', 0)
                else
                    this.animate('right', -this.way -20, true);
            }
        }, 
        animate: function(direction, to, isDone){
            this.options.start(this);
            this.options.animate(this, direction, to, isDone);
        }, 
        click: function(e, el){
            this.options.click(this, e, el);
        }, 
        play: function(){
            if(this.timer){
                clearTimeout(this.timer);
            }
            this.right(this);
            this.options.autoplay = true;
            this.timer = setTimeout($.proxy(this.play, this), 2000);
        }, 
        pause: function(){
            if(this.timer){
                clearTimeout(this.timer);
            }
            this.options.autoplay = false;
        }, 
        contextmenu: function() {
            var $this = this;
            $(this.element).bind({
                'contextmenu':function(e){
                    if(!e.ctrlKey){
                        e.preventDefault();
                        $('#contextmenu').remove();
                        var c = $('<div id="contextmenu">')
                        .css({
                            position : 'absolute',
                            display  : 'none',
                            'z-index': '10000'
                        })   
                        .appendTo($('body'));
                        // play & pause
                        $('<a>').click(function(){
                            if($this.options.autoplay){
                                $this.pause();
                                $(this).html($this.options.menu[0]);
                            } else {
                                $this.play();
                                $(this).html($this.options.menu[1]);
                            }
                        })
                        .html($this.options.menu[$this.options.autoplay ? 1 : 0]).appendTo(c);
                        // left
                        $('<a>').click(function(){
                            $this.left();
                        })
                        .html($this.options.menu[2]).appendTo(c);
                        // right
                        $('<a>').click(function(){
                            $this.right();
                        })
                        .html($this.options.menu[3]).appendTo(c);
                        $('<a>',{
                            'href':'http://gokercebeci.com/dev/carousel'
                        })
                        .html('carousel v2.0.0').appendTo(c);
                        // Set position
                        var ww = $(document).width();
                        var wh = $(document).height();
                        var w = c.outerWidth(1);
                        var h = c.outerHeight(1);
                        var x = e.pageX > (ww - w) ? ww : e.pageX;
                        var y = e.pageY > (wh - h) ? wh : e.pageY;
                        c.css({
                            display : 'block',
                            top     : y,
                            left    : x
                        });
                    }
                }
            });
            $(document)
            .click(function(){
                $('#contextmenu').remove();
            })
            .keydown(function(e) {
                if ( e.keyCode == 27 ){
                    $('#contextmenu').remove();
                }
            })
            .scroll(function(){
                $('#contextmenu').remove();
            })
            .resize(function(){
                $('#contextmenu').remove();
            });
        }
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                    new Plugin( this, options ));
            }
        });
    }

})( jQuery, window, document );