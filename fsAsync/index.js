const fs = require("fs");

// fs.writeFile("bio.txt", "Hello World", (err) => {
//   console.log("File Created");
// });

// fs.unlink('myBio.txt',(err)=>{console.log('file Deteted')})

// fs.appendFile('bio.txt','Hello World 2', (err)=>{
//     console.log('Data Added')
// })

// fs.readFile('bio.txt','utf8',(err,data)=>{
//     console.log(data)
// })

fs.rename('bio.txt','myBio.txt',(err)=>{
  console.log('Rename Successfull')
})