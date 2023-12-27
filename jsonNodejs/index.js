const fs = require("fs");
const biodata = {
    name: "harsh",
    age: 20,
    channel: "node",
    
};


// 1: convert to json
const jsonData = JSON.stringify(biodata);

// 2: add to the other File
fs.writeFile("data.json", jsonData, (err) => {
//    console.log("done"); 
});

// 3: readfile
fs.readFile("data.json", "utf-8", (err, data) => {
    // console.log(data);
});

// 4: convert back to js object
const orgData = JSON.parse(jsonData);
console.log(jsonData);
console.log(orgData);

// 5: console log











// // how to convert data into json format
// //json.parse or json.stringify

// const jsonData = JSON.stringify(biodata);
// //{"name":"harsh","age":20,"channel":"node"}


// const objData = JSON.parse(jsonData);
// //{ name: 'harsh', age: 20, channel: 'node' }

// console.log(objData);