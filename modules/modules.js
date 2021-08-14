//CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)

//Modules
//if no export is called it will wraps into a function but only when the 
//function is called and executed in that file


const names = require('./4-names')
//const {john , peter} = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternatives-flavor')
require('./7-mind-gerenda')


console.log(data)
sayHi('fateme')
sayHi(names.john)
sayHi(names.peter)
//sayHi(john)
//sayHi(peter)
