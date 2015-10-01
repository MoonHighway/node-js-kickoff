Challenge Best of 3
=====================
Create an app that flips a coin 3, 5, 7 or any odd number of times above 3 and records the results.  This app
should display the results as well as the winner.

Requirements
-------------
1. The coin flip function must return "heads" or "tails" 50/50 chance
2. The coin flip function must be located in a seperate module
3. Running __bestof.js__ consumes the __./lib/coinflip.js__ module
4. First : Invoke coin flip three times and display the results
5. Next  : Allow user to send 3, 5, 7, or any odd number as an argument when starting the __bestof.js__ module
6. Then  : Check the argument to make sure it is odd and greater than 3
7. Finally : Flip the coin based on the argument 5 times, 7 times, or any odd number of times
8. Report on the results

__Demo : Iteration 1__

```
    $ node bestof
      Heads it is
      { heads: 2, tails: 1 }
```
__Demo : Iteration 2__

```
    $ node bestof 9
      Tails it is
      { heads: 4, tails: 5 }
```
