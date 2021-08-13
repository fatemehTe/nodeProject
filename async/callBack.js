const fs = require("fs")

fs.readFile('/home/fateme/VsCodeProjects/nodeProject/text.txt',(err, data)=>{

    let mergeString = ''
    let txtString = ''
    let txt2String = ''
    if(err){
       return console.log(err)
    }
    else{
        txtString = data.toString()
        fs.readFile('./text2.txt', (err, data)=>{
            if(err){
                return console.log(err)
            }else{
                txt2String = data.toString()
                mergeString = txtString + txt2String
                fs.writeFile('./merge.txt', mergeString,(err)=>{
                    if(err){
                        console.log(err)
                    }
                    else{
                        console.log('write Done')
                    }
                    fs.readFile('./merge.txt', (err, data)=>{
                        if(err){
                            return console.log(err)
                        }
                        else{
                            console.log(data.toString())
                        }
                    })
                })
            }
        })
    }
})




