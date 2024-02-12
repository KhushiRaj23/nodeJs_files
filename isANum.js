const { parse } = require('path');
const readline=require('readline');
const { clearInterval } = require('timers');
const a=readline.createInterface({
    input:process.stdin,
    output:process.stdout});
a.question('Enter is Value: ',(userInput)=>{
    const num=parseFloat(userInput);
    if(!isNaN(num)){
        console.log('your value: ',(userInput));
    }
    else{
        console.log('invalid value');
    }
    a.close();
});