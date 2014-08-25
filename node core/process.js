console.log(process.argv);

function getArgument(name) {
    return process.argv[process.argv.indexOf(name)+1];
}

/* process argv always contains 'node' and 'filename'
 *
 */
if (process.argv.length > 2) {
    console.log("INFO: " + getArgument('info'));
} else {
    console.log("This process ran without arguments");
}

//Standard Output
process.stdout.write("\nInput: ");

//Standard Input
process.stdin.on('data', function(data) {

    var input = data.toString().toLowerCase().trim();

    if (input === "exit") {

        //Exit
        process.exit();

    }

    //Standard Output
    process.stdout.write("Output: " + input +"\nInput: ");

});

