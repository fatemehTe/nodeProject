//GLOBALS -- no window needed

// __dirname  -- path to current directory
// __filename -- file name
// require    -- function to use modules (CommonJS)
// module     -- info about current module (file)
// proccess   -- info about env where the program is being executed

console.log(__dirname)
console.log(__filename)
setInterval(()=>{
    console.log('HEllo')
}, 1000)