const fs = require('fs')
fs.writeFileSync('bio.txt', 'Hello World') //Make file
fs.appendFileSync('bio.txt',' Hey World') //add Data
const ReadFile = fs.readFileSync('bio.txt','utf8') //Convert and read
console.log(ReadFile)
fs.renameSync('bio.txt','myBio.txt') //Reanme
fs.unlinkSync('myBio.txt') //Delete