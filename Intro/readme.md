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
* Version 1 will be released when there aren't any more breaking changes
* Even versions are production, odd versions are development

Installing Node
---------------
The easiest way to install node is to [download and run the installer](http://nodejs.org) on the homepage.
Walk through the wizard and install. Make sure you run the installer as an Administrator or use
"Super User Do" or __sudo__.  You can also [download](nodejs.org/download/) individual installers on this page.
Finally you can [download](nodejs.org/dist/v0.10.26/node-v0.10.26.tar.gz) the node js source and install and run
it directly from the source.

__Node runs on___
* Windows
* OSX
* Linux

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