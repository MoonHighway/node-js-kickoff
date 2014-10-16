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