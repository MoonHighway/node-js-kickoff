Node js fs module
=================
Node js manages the file system through the fs module.  This module contains everything required to manage files and 
directories.  Files can be read as Binary or as a number of different file formats.

Files
-----

###Reading Files
```javascript
    
    fs.readFile("/path/file.txt", 'UTF-8', function(err, fileText) { });
    fs.readFile("/path/file.txt", function(err, buffer) { });
    
```

###Appending Files
```javascript
    
    fs.appendFile("/path/file.txt", "A New Text File", function(err) { });
    fs.appendFileSync("/path/file.txt", "A New Text File");
    
```

###Removing Files
```javascript

   fs.unlink("/path/file.txt", function(err) { });
   fs.unlinkSync("/path/file.txt");
   
```
