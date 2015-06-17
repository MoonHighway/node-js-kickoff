var fs = require('fs');

process.stdin.on('data', function(data) {

    var input = data.toString().toLowerCase().trim(),
        fileName = 'theFile.txt';

    switch(input) {

        case "create" :

            fs.writeFileSync(fileName, "A New Text File\n===================\n\r\n\r");
            console.log("File Created");

            break;

        case "append" :

            fs.appendFile(fileName, "* Item Appended\n\r", function(err) {

                if (err) {
                    throw err;
                }

                console.log("File Appended");

            });


            break;

        case "read" :

            fs.readFile(fileName, 'UTF-8', function(err, data) {
                if (err) {
                    console.error(err);
                } else {
                    console.log(data);
                }
            });


            break;

        case "remove" :


            fs.unlinkSync(fileName);
            console.log("File Removed");

            break;

        case "exit" :

            process.exit();

            break;

    }


});

console.log("create | append | read | remove | exit");
