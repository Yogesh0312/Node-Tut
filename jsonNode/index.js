let fs = require("fs");
let bioData = {
  name: "My Name",
  age: 28,
  city: "Ahmedabad",
};

let jsonData = JSON.stringify(bioData);
// fs.writeFile('jsonFile.json',jsonData,(err)=>{
//     console.log('Done')
// })
fs.readFile("jsonFile.json", "utf-8", (err, data) => {
  const orgData = JSON.parse(data);
  console.log(data);
  console.log(orgData);
});
// console.log(jsonData)
// let objectData = JSON.parse(jsonData)
// console.log(objectData)
