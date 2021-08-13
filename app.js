// var msg = 'hello world'
// // console.log(msg)
// let a = 3
// let b = 3.3
// let c = 'fateme'
// // console.log(typeof c)
// let array=[1,2,3]
// // console.log(typeof array)
// // console.log(array[1])
// array.pop()
// // console.log(array)
// array.push(10)
// // console.log(array)
// const num = '123'
// casted = Number(num)
// // console.log(typeof casted)
// tOrF = Boolean(1)
// // console.log(typeof tOrF)
// sum = 1+2+4
// sum1=1+2+'4'
// sum2=5/3
// sum3=5%3
// sum4=2**3
// sum5=2-3
// // console.log(sum5)
// sum6='6'+'4'
// sum7="6"/"4"
// sum8="6"-"4"
// // console.log(typeof sum8)
// sum9="3"-1
// // console.log(sum9)
// sum10=1-'3'
// // console.log(sum10)
// // console.log(1<2)
// // console.log('1'<2)
// // console.log(1<'2')
// // console.log(1==2)
// // console.log('1'=='1')

// str = ''
// for(i=0; i<10; i++){
//     str+='*'
// }
// // console.log(str)

// i=10
// while(i>0){
//     // console.log(i)
//     i--
// }

// function add(a ,b){
//     return a+b
// }

// a=3
// b=5

// // console.log(add(a ,b))

// ret = add(3, 7)
// console.log(ret)

// const mulfunc = (a, b)=>{ return a*b }
// console.log(mulfunc(2,7))

// const funcOne = function(){return "salam"}
// const funcTwo = (a)=>{a();}


// funcTwo(funcOne());
// 1-
let adad = 4
console.log('1- Factorial of '+adad+' is: '+factorial(adad))
function factorial(a) {

    fact = 1
    while( a > 0 ){
        fact = fact*a
        a --
    }
    return fact
}

// 2-
adad = 11
console.log("2- "+adad+' is in range of '+convertToChar(adad))
function convertToChar(a) {

    if( a >= 0 && a < 12 ){
        return 'F'
    }
    else if( a >= 12 && a < 14 ){
        return 'D'
    }
    else if( a >= 14 && a < 16 ){
        return 'C'
    }
    else if( a >= 1 && a < 18 ){
        return 'B'
    }
    else if( a >= 18 && a < 20 ){
        return 'A'
    }
    return false
}

// 3-
const x_input = 1;
const y_input = 2;
console.log("3- Formula result is: "+calcFormula(x_input , y_input)+
" for x = "+x_input+" and y = "+y_input)
function calcFormula(x , y) {
    if(x+y == 0){
        return '"Error occures :division by zero"'
    }
    formula_up = (x**2*4-9)**4*130
    formula_below = 2*x+y
    return formula_up/formula_below
}

// 4-
let array =[1 ,5, 3, 1, 2, 5, 3, 5]
adad = 3
console.log("4- Number "+adad+" repeated "+repeat(adad)+" times in "+array)
function repeat(a) {
    numOfOcurance = 0
    for(i=0; i<array.length; i++){
        if(array[i]==a){
            numOfOcurance ++
        }
    }
    return numOfOcurance
}
// 5-
console.log("5- The largest number in "+array+" is "+findLargest())
function findLargest() {
    largest = 0
    for(i=0; i<array.length; i++){
        if(largest<array[i])
        largest = array[i]
    }
    return largest
}

// 6-
adad = 35
console.log("6- Joz sahih "+adad+" is "+joz_sahih(adad))
function joz_sahih(a, array) {
    let fard = 1
    array = []
    for(i=0; i<20; i++){
        array[i] = fard 
        fard += 2
    }
    for(i=0; i<array.length; i++){
        a = a-array[i]
        if(a==0){
            return i+1
        }
        else if(a < 0){
            return i
        }
    }
}

// 7-
adad = 123
console.log("7- The reverse of "+adad+" is: "+reverse(adad))
function reverse(a) {
    str = String(a)
    reverseStr = ''
    for(i=str.length-1; i>=0; i--){
        reverseStr += str[i]
    }
    return reverseStr
}


// 8-

adad = 31
console.log('8- Sum of ones in binary format of '+adad+" is: "+sum_of_ones(adad))
function sum_of_ones(adad) {
    array = []
    lastIndex = 0
    sumOfOnes = 0
    //array keeps the Integers**2 from 0**2 to 20**2
    for(i=0; i<20; i++){
        array[i]=2**i
    }

    //finds the index of the largest square number that is less than given int
    lastIndex = find_largest_square_number(adad)
    
    //which is 0 and which is 1
    return which_is_0_1(adad, lastIndex)
      
}  
function find_largest_square_number(adad){
    i=0
    while(i<=20){
        if(adad < array[i]){
            lastIndex = i-1
            break
        }
        i++
    }
    return lastIndex
}
function which_is_0_1(adad, lastIndex){
    for(i=lastIndex; i>=0; i--){
        if(adad>array[i]){
            adad -= array[i]
            sumOfOnes += 1
        }
        else if(adad == array[i]){
            sumOfOnes += 1
            break
        }
    }
     return sumOfOnes; 
}

// 9- 
let month = 14
month = (month>12) ? month%12 : month
console.log("9- The calendar for month: "+month+" is like below: ")
console.log(calendar(month))

function calendar(month) {

    const days = ['sat', 'sun', 'mon', 'tue', 'wed', 'thr', 'fri']
    let titleStr = ''
    for(i=0; i<7; i++){
        titleStr += days[i]+' '
    }
    console.log(titleStr)
    let start_day = calc_start_day (month)
    let blank_str = ''
    for(i=0; i<start_day; i++){
        blank_str+='    '
    }
    day = 1
    let row = ' '
    row += blank_str
    
    while(day<=30){
        for(j=start_day; j<7 && day<=30; j++){
            row += (day>9)? day+'  ':day+'   '
            day ++
        }
        console.log(row)
        row = ' '
        start_day = 0
    }
}

function calc_start_day(month) {

    if(month>12) month=month%12
    start_day = (month-1)*2+1 
    if(start_day > 6) start_day = start_day%7
    return start_day
    
}

//10-
adad = 4
let adad2 = 6
let operand = '*'
console.log("10- The result of "+adad+operand+adad2+" is: "+operatorRecognize(operand, adad, adad2))
function operatorRecognize(a, b, c) {

    switch(a){
        case '+':{
            return b + c
        }
        case '-':{
            return b - c
        }
        case '/':{
            return b / c
        }
        case '*':{
            return b * c
        }
        default: 
            return a + b
    }
}