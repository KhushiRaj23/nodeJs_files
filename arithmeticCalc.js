const { parse } = require('path');
const readline=require('readline');
const { clearInterval } = require('timers');
const a=readline.createInterface({
    input:process.stdin,
    output:process.stdout});
a.question('Enter is Value: ',(userInput1)=>{
    a.question('Enter is Value: ',(userInput2)=>{

    const num1=parseFloat(userInput1);
    const num2=parseFloat(userInput2);
    if((isNaN(num1))|| (isNaN(num2))){
        console.log('invalid input ');
        a.close();
        return;
        
    }
    else{
        const sum=num1+num2;
        const sub=num1-num2;
        const div=num1/num2;
        const mul=num1*num2;
        console.log("Addition: ",sum);
        console.log("Subtraction: ",sub);
        console.log("Division: ",div);
        console.log("Multiplication: ",mul);
    }
    a.close();
})});