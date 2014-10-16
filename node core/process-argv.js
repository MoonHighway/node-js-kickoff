console.log(process.argv);

function getArgument(name) {
    return process.argv[process.argv.indexOf(name)+1];
}

/* process argv always contains 'node' and 'filename'
 *
 */
if (process.argv.length > 2) {
    console.log("INFO: " + getArgument('-info'));
} else {
    console.log("This process ran without arguments");
}
