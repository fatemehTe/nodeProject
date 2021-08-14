const http = require ('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('welcome to our homepage')
    }
    if(req.url === '/about'){
        res.write('welcome to our aboutpage')
    }
    
    res.end(`<h1>OOPS!!!</h1>`)
})

server.listen(5000)