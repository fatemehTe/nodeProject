//call by refrence: eg an array: we work only on the refrence of it so any changes 
//on it is saved. 
//but in call by value: eg an integer we work on copy of that and not the origin of it


let a = 3
let array = [1, 2, 3]

console.log('a is: '+a)
console.log('array is: '+array)
call_by_value(a)
call_by_refrence(array)
console.log('array is: '+array+' after calling the function')
console.log('a is: '+a+' after calling the function')
function call_by_value(a) {
    a = 4
    console.log('a is: '+a+' in function')
}

function call_by_refrence(array) {
    array[0] = 'fateme'
    console.log('array is: '+array+' in function')
}
