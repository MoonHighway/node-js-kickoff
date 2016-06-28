Introduction
============
Node js is Javascript on the server, without a browser.  The project is officially called node, but we add the js
to eliminate confusion.

What
----
* Javascript without a browser
* Based on Chromes V8 engine
* The project is offically called node

How
---
* Open source project
* Hosted on Github
* Community developed modules
* Event Based IO

What it can do
--------------
* Act as a web server
* Build Command Line Tools
* Build Socket Applications
* Anything you can do in JS
* Ideal For "Web Stuff"
    * Dynamic Websites
    * Rest API's
    * Web socket Applications
    * Sharing Code

Source
------
* [Source on GitHub](https://github.com/joyent/node)



REPL
====
```
    $ node
    > var h = "Hello";
    undefined
    > var w = "World";
    undefined
    > function print(first, second) {
    > ... return first + " " + second + "!        From Node js  ;)"
    > ... }
    undefined
    > var r = print(h, w);
    undefined
    > console.log(r);
    Hello World!          From Node js  ;)
    undefined
    > .save hello-world.js
    Session saved to:hello-world.js
    >
    (^C again to quit)
    >

    $ node hello-world.js
    Hello World!          From Node js  ;)

    $

```

Stopping Node js
----------------
1) Node REPL processes run continuously until stopped.
2) You can exit by typing "Ctl C" twice

Commenting a Node js file
-------------------------
* // Can be used to comment out a line
* /* will continuously comment until */
* /** Is typically used to describe functions and objects for documentation parsers */
