console.log("Initializing the dice module");

var defaultFaces = 6;

module.exports = function(faces) {

    defaultFaces = faces;

    return function() {

        return Math.floor(Math.random() * defaultFaces);

    }

};


