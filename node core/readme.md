Node js Core
============
The node core covers the Javascript objects that can be used upon installing node js.

Global Modules
--------------
The following objects are already present when you start a Node process.  You do not need to require anything
in you document to use them.

* global
* process
* console
* Class: Buffer
* require()
* __filename
* __dirname
* module
* exports
* setTimeout(cb, ms)
* clearTimeout(t)
* setInterval(cb, ms)
* clearInterval(t)

### globals
```javascript

    console.log("This file: " + __filename);
    console.log("The directory: " + __dirname);
    console.log("Environment Port: " + process.env.port || 3000);

```

###process.argv
```javascript

    console.log(process.argv);
    
    /* process argv always contains 'node' and 'filename'
     *
     */
    if (process.argv.length > 2) {
        console.log("INFO: " + getArgument('info'));
    } else {
        console.log("This process ran without arguments")
    }
    
    function getArgument(name) {
        return process.argv[process.argv.indexOf(name)+1];
    }

```

```
    $ node process.js varname value varname value info something
    [ 'node',
      'C:\\Users\\admin\\Documents\\Moon Highway Training Materials\\Subjects Catalog\\Node\\Topics\\node core\\process.js',
      'varname',
      'value',
      'varname',
      'value',
      'info',
      'something' ]
    INFO: something
    
    $
    
```

###STDIN, STDOUT, STDERROR
```javascript
    //Standard Output
    process.stdout.write("\n\n\nInput: ");
    
    //Standard Input
    process.stdin.on('data', function(data) {
    
        var input = data.toString().toLowerCase().trim();
    
        if (input == "exit") {
    
            //Exit
            process.exit();
    
        }
    
        //Standard Output
        process.stdout.write("Output: " + input +"\nInput: ");
    
    });
```

Core Modules
------------
There are modules that come with your node js installation that need to be loaded in your process using require().  Here
are a few of these modules that we will look at today.

* util
* path
* http
* fs
* EventEmitter

###path module
```javascript

    var path = require('path');
    var url = "/some//Path\/that is a bit//broken/../..";
    
    url = path.normalize(url);
    
    console.log(url);      // \some\Path
    
    url = path.join('courses', 'class', 'javascript', 'students');
    
    console.log(url);      //  courses\class\javascript\students
    
    url += "\\studentList.html";
    
    console.log(url);     //  courses\class\javascript\students\studentList.html
    
    url = path.basename(url);
    
    console.log(url);     //  studentList.html

```

###util module
```javascript

    var util = require('util');
    
    util.print("Gives more control ");
    util.print("over how things \n are written \n and formatted \n to the console.\n\n\n\n\n");
    
    util.log("Some more options");

```
