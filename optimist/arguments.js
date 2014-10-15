var argv = require('optimist').argv;

if (!argv.adj) {
    console.log("You need to run this again with arguments --adj, --verb, --pastVerb, --noun");
    process.exit();
}

console.log('The %s man %s the dishes before he %s to his %s.', argv.adj, argv.pastVerb, argv.verb, argv.noun);
