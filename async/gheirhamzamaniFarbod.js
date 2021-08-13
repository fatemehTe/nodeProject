const fs = require("fs");
// const http = require("http");

function printText(err, text) {
    let counter = 0;
    for (let char of text.toString()) {
        if (char == "t") {
            counter++
        }
    }
    console.log(counter);
}

console.log("test")
fs.readFile("text.txt", printText)
console.log("finish Test")

function callee(test) {
    console.log(test);
}

function caller(callback) {
    callback("a");
}

caller(callee);
//********************************************************* */
// fs.readFile("a.txt").then(function(buffer) {

//     fs.writeFile("b.txt", buffer, "w").then(() => {
//         console.log("write finished");

//         // fs.readFile("c.txt").then()

//     }).catch((error) => {
//         console.log(error);
//     })

// }).catch(function(error) {
//     console.log(error);
// })

// function setTimeOutPromisify(ms) {

//     return new Promise((success, fail) => {

//         setTimeout(() => {
//             success();
//         }, ms);
//     })
// }

// setTimeOutPromisify(1000).then(function() {
//     console.log("finished");
// })
// function readFilePromisify(filePath) {

//     return new Promise((resolve, reject) => {

//         fs.readFile(filePath, (err, data) => {

//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }

// readFilePromisify("a.txt").then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

// async / await

// async function mainFunction() {
//     console.log("hi");
//     try {
//         const result = await readFilePromisify("a.txt");

//     } catch (err) {
//         console.log(err);
//     }

//     console.log("bye");
// }
// console.log("hi from outside");
// mainFunction();
// console.log("bye from outside");
//************************************************************ */
// function fetchUrl(url, cb) {
//     let chunk;
//     http.get(url, (res) => {
//         res.on("data", (data) => {
//             chunk += data;
//         })

//         res.on("end", () => {
//             cb(null, chunk);
//         })
//     })
// }

// fetchUrl("https://google.com", (err, data) => {
//     console.log(data);
// })