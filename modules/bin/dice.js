console.log("Initializing the dice module");

var defaultFaces = 6;

exports.roll = function(faces) {
    faces = (typeof faces == "number" && faces > 0) ? faces : defaultFaces;
    return Math.ceil(Math.random() * faces);
};