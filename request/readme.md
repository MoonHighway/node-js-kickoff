Making HTTP Requests
============
You can use the HTTP object to make a HTTP request for a webpage or a file.

Making a Request
----------------

```javascript
    var http = require('http');
    
    http.request({ 
        hostname: 'en.wikipedia.org',
        port: 80,
        path: '/wiki/Mchammer',
        method: 'GET'
    }, function(res) {
    
        var body = "";
    
        res.on('data', function (chunk) {
            body += chunk;
        });
    
        res.on('end', function() {
            console.log(body);
        });
        
    }).end();

```


