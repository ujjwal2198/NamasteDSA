
/*
    I need to count no of digit.
    i can get last digit by mod 10. 1234 / 10 = 123. 1
    but 123 / 10 = 12 2
    12 / 10 = 1  3
    1 / 10  = 0. 4
*/ 


let digit = "347678";
let copyDigit = digit;
let countDigit =0;

if(digit<0){
    copyDigit=Math.abs(digit);
}

while (copyDigit>0){
    copyDigit = Math.floor(copyDigit / 10);
    countDigit = countDigit+1;
}

console.log(countDigit);


