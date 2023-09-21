const fs = require('fs')
// fs.writeFileSync('read.txt', "Hello World") //For Create File
// fs.appendFileSync('read.txt',"  Hello World 2") //for Add Data
const buf_data = fs.readFileSync('read.txt') //Get Buffer Data
// console.log(buf_data) 
const org_data = buf_data.toString()  //Get Original Data
// console.log(org_data) 
fs.renameSync('read.txt','readWrite.txt')
