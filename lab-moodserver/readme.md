Mood Server
===========
The mood server is an http server that serves html pages 'happy' or 'sad' depending upon the mood variable.  The
mood variable is set by collecting console data using process.stdin

Topics
------
* http server
* serving html
* serving img
* process.stdin


Instructions
------------
1.  Create a variable to hold mood 'happy' or 'sad'
2.  Create a webserver and serve './public/happy.html' or './public/sad.html'
3.  Make sure the server also serves images
4.  Collect data from the user using process.stdin.on('data', callback);
4.  Allow user to set happy or sad from console
5.  Allow user to exit by typing exit into the console


