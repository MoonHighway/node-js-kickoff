npm formidable module
=====================
[Presentation (10)](https://docs.google.com/a/moonhighway.com/presentation/d/1BC3CrRWqiKvDYXU6y2_cVegLdZ9WMkYAXdR2OaJNIcI/edit#slide=id.g33becb33d_00)
Formidable is a node module that can speed up your workflow by parsing your post data and injecting the form variables
and uploaded files neatly into a callback function.


Installing formidable
---------------------

```
    $ npm install formidable
```

parsing forms data with formidable
----------------------------------

```javascript
    var form = new formidable.IncomingForm();

    form.uploadDir = __dirname + "/Uploads/";

    form.parse(req, function (err, fields, files) {

        fs.rename(files['upload-file'].path,
                form.uploadDir + "/"
                + fields['stoke-level'] + "-"
                + fields['fav-color'] + "-"
                + files['upload-file'].name);

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('File Uploaded: ' + files['upload-file'].name);

    });
```

