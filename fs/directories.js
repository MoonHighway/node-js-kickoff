var fs = require('fs');

var students = {

    "Leroy": "JAVA",
    "Paul": "Javascript",
    "JuJuBee": "HTML"

};

if (!fs.existsSync(__dirname + "/students")) {
    fs.mkdirSync("./students");
}

fs.appendFile('students/index.json', JSON.stringify(students), function(err) {

    if (err) {
        throw err;
    }

    console.log("Directory and File Created");

});




