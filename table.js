function table(fromNumber){
    let num=0;
    console.log("table: ");
    let interval=setInterval(function(){
        num++;
        if(num<11){
            console.log(fromNumber,"*",num,"=",
            fromNumber*num);
        }else{
            console.log('end');
            clearInterval(interval);
        }
    },1000);
}

const { parse } = require('path');
const readline=require('readline');
const { clearInterval } = require('timers');
const a=readline.createInterface({
    input:process.stdin,
    output:process.stdout});
a.question('Enter is Value: ',(userInput)=>{
    const num=parseFloat(userInput);
    if(!isNaN(num)){
        // console.log('your value: ',(userInput));
        table(num);
    }
    else{
        console.log('invalid value');
    }
    a.close();
});