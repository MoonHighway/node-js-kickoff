XML Downloader
==============
This module will download a remote xml file and save the results as both xml and parsed json.  This module
is designed to be a tool for learning node js.  Students in Moon Highway ILT will develop and use this module
in their class projects.

Use
---
Invoking the grab function will download an XML file from a server.  Parse the XML to JSON, return the parsed JSON, and
save copies of both the xmlfile and the json file to the output folder.

```javascript
        var downloader = require("mh-xmldown");

        downloader.grab('http://www.xmlfiles.com/sample.xml', './output', function (err, data) {

            if (err) {
                throw err;    // Any errors
            }

            var jsonResults = data;   // The xml data results parsed as JSON

        });
```
