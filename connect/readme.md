npm connect
===========
[Presentation (8)](https://docs.google.com/a/moonhighway.com/presentation/d/1BC3CrRWqiKvDYXU6y2_cVegLdZ9WMkYAXdR2OaJNIcI/edit#slide=id.g33becb33d_00)
Connect is a server module that we can use to help speed up web development. Connect is great for serving static files.
Later on we will review the Express modules which is built on connect and provides many more features.

Installing Connect
-------------------
[connect](https://www.npmjs.org/package/connect)

```
    $ npm install connect
```

Creating a connect app
----------------------

```javascript
    var connect = require('connect'),
        http = require('http');

    var app = connect()
        .use(connect.logger('dev'))
        .use(connect.static('public'));

    http.createServer(app).listen(3000);

    console.log("Files being served on " + (3000));
```

Starting your server
--------------------

```
    $ node server.js
```

Viewing your files
------------------

* [Home page html file](http://localhost:3000)
* [Leroy Brown .jpeg img](http://localhost:3000/img/leroy-brown.jpg)

Citations
---------

####Leroy Brown JPG
Sample Image from Deviant Art
* [Deviant Art](http://www.deviantart.com/)
* [Leroy Brown JPG](http://obscuremailman.deviantart.com/art/Big-Bad-Leroy-Brown-186914374)