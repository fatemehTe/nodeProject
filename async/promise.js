const fs = require('fs')
const util= require('util')

let readFile = util.promisify(fs.readFile)
let writeFile = util.promisify(fs.writeFile)

let content1 =''
let content2 =''

readFile('../text.txt').then((data)=>{
    content1 = data
}).then(()=>{
    readFile('../text2.txt')
}).then((data)=>{
    content2 = data
}).then(()=>{
    writeFile('./text3.txt', content1 + content2)
}).then(()=>{
    console.log('Done')
}).catch((err)=>{
    console.log(err)
})