console.log("Hello World");

const fs = require('fs');
fs.readFile('Shelly.txt' , 'utf8' , function(err,data){
    if(err) throw err;;
    console.log(data)
});

const fs = require('fs');
fs.writeFile('file.txt', 'Hello World!', function (err) {
 if (err) throw err;
 console.log('File saved!');
});

const https = require("https");
https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {
 let data = '';
 resp.on('data', (chunk) => {
 data += chunk;
 });
 resp.on('end', () => {
 console.log(JSON.parse(data));
 });
}).on('error', (err) => {
 console.log("Error: " + err.message);
});

const myModule = require('./my-module.js');
console.log(myModule.myFunction());