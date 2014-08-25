npm optimist module
===================
[Presentation (5)](https://docs.google.com/a/moonhighway.com/presentation/d/1BC3CrRWqiKvDYXU6y2_cVegLdZ9WMkYAXdR2OaJNIcI/edit#slide=id.g33becb33d_00)
A node modules that takes terminal arguments and places them on a hash.

Installing Optimist
-------------------
[optimist](https://www.npmjs.org/package/optimist)

```
    $ npm install optimist
```

Sending Data to your node app
-----------------------------

```
    $ node arguments.js --adj nice --pastVerb ate --verb ran --noun car
```

Getting the data in the node app
-----------------------------------

```javascript

    var argv = require('optimist').argv;

    argv.adj;           // 'nice'
    argv.pastVerb;      // 'ate'
    argv.verb;          // 'ran'
    argv.noun;          // 'car'

```

