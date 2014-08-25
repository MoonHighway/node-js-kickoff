// Setting h to a String "Hello"
var h = "Hello";

// Setting w to a String "Hello"
var w = "World";

/**
 * Concatenates two strings with a space and appends an explanation point and "From Node js ;)"
 * @param first {string} The first word
 * @param second {string} The second word
 * @returns {string} A sentence containing the first and second word
 */
function print(first, second) {
    return first + " " + second + "!       From Node js ;)";
}

// Executes the print function
var r = print(h, w);

// Outputs the results
console.log(r);
