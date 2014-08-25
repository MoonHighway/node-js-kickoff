var fs = require('fs');

var students = {

    "Leroy": "JAVA",
    "Paul": "Javascript",
    "JuJuBee": "HTML"

};

fs.mkdirSync(__dirname + '/students');

fs.appendFile('students/index.json', JSON.stringify(students), function(err) {

    if (err) {
        throw err;
    }

    console.log("Directory and File Created");

});




