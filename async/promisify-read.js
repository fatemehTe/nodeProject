const fs = require('fs')
const { resolve } = require('path/posix')


const readFilePromise = (path)=>{
    return new Promise((resolve, reject)=>{
        fs.readFile(path, (err, data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
            
        })
    })
}

readFilePromise('./text.txt')