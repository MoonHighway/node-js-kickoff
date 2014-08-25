var path = require('path');
var url = "/some//Path\/that is a bit//broken/../..";

url = path.normalize(url);

console.log(url);

url = path.join('courses', 'class', 'javascript', 'students');

console.log(url);

url += "\\studentList.html";

console.log(url);

url = path.basename(url);

console.log(url);
