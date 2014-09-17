parsing post bodies
===================
Whenever form data is sent to the post data needs to be collected from the request in chunks.  Once we have the post data
we have to parse it. That could get ugly, so we will use one of many parsing frameworks after this example.

topic
-----
* handling a post request
* handling a multi-part post body
* why we need frameworks

Handling POST Requests
----------------------

```javascript
    http.createServer(function (req, res) {

        if (req.method == 'POST') {

            var body = '';

            req.on('data', function (chunk) {
                body += chunk;
            });

            req.on('end', function () {

                body;    //  name=value;name2=value2;name3=value3

            });

        }

    }).listen(3000);
```

Handling File Uploads
---------------------
When parsing files the form post data and the file post data are handled in the same body.

```
    ------WebKitFormBoundaryGsTefag7g3LFBijB
    Content-Disposition: form-data; name="fav-color"

    #000000
    ------WebKitFormBoundaryGsTefag7g3LFBijB
    Content-Disposition: form-data; name="stoke-level"

    6
    ------WebKitFormBoundaryGsTefag7g3LFBijB
    Content-Disposition: form-data; name="upload-file"; filename="working.js"
    Content-Type: application/javascript

    This is where the file body is placed...
```
