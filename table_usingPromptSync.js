function cd(n, t) {
    console.log(n, '*', t, '=', n * t);
    t = t + 1;
    if (t < 11) {
        setTimeout(function () {
            cd(n, t);
        }, 1000);
    } else {
        clearTimeout(); // Corrected the function name
    }
}

const prompt = require('prompt-sync')();
const num = parseFloat(prompt('Enter a number: ')); // Added parseFloat to convert input to a number
cd(num, 1);