//module / library / package
const fs = require('fs')
const util= require('util')

let readFile = util.promisify(fs.readFile)
let writeFile = util.promisify(fs.writeFile)

async function main() {
    try{
        const read1 = await readFile('../text.txt')
        const read2 = await readFile('../text2.txt')
        writeFile('./text4.txt', read1 + read2)
    }
    catch(err){
        console.log(err)
    }
}

main()