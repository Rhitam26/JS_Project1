// const os = require('os');

// // info about current user
// const user= os.userInfo();

// console.log(user);

// // info returns the system uptime in seconds

// console.log("System Uptime is "+os.uptime);

// const {readFileSync, writeFileSync} = require('fs');

// const first= readFileSync('./content/first.txt', 'utf-8');
// const second = readFileSync('./content/second.txt', 'utf-8');

// console.log(first, second);

// writeFileSync('./content/result-sync.txt',"Here is the text: "+first+" "+second,{flag:'a'});

const {readFile, writeFile} = require('fs');



const first= readFile('./content/first.txt', 'utf-8', function(err, result){
    if(err) return console.error(err);
    console.log(result);
});
const second= readFile('./content/second.txt', 'utf-8', function(err, result){
    if(err) return console.error(err);
    console.log(result);
});

console.log("Lets begin the First Task.");

writeFile('./content/result-async.txt',first+";"+second, function(err,result) {
    if(err) return console.error(err);
    console.log(result);
    console.log('Done with this task');
})

console.log('Upto the next task');

