const validator = require('validator')
const sum = require('./utils.js')
const yargs = require('yargs')


console.log(sum(4, -2));
console.log(validator.isEmail('xswxwdxqw'));
yargs.command({
    command:"add",
    describe: "Add's a new note",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type: "string"
        },
        body:{
            describe:"Note body",
            demandOption:true,
            type: "string"
        }
    },
    handler:function(argv){
        console.log("Title of the Note: " + argv.title + "Not body: " + argv.body);
    },
})
yargs.command({
    command:"read",
    describe: "Read the note",
    builder:{
        title:{
            describe:"Read the Note",
            demandOption:true,
            type: "string"
        }
    },
    handler:function(argv){
        console.log("Read the note: "+argv.title);
    }
})
yargs.command({
    command:"update",
    describe: "Update the note",
    handler:function(){
        console.log("Update the note");
    }
})
    
console.log(yargs.argv);