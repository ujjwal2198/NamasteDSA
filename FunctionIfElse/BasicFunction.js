// Basic Function

function HelloWorldBasicFunction(){
    console.log("Hello World From Function");
}

HelloWorldBasicFunction();

// Dynamic Function

function HelloWorldDynamicFunction(name){
    console.log("Hello World From Function by "+name);
}

HelloWorldDynamicFunction("Ujjwal");

// finding sum 
function doSum(a,b){
    let sum = a+b;
    console.log(sum);
}

let x = 10;
let y = 20;
let z = 40;

doSum(x,y);
doSum(x,z);


// finding square and return it back

function findSquare(s){
    let square = s*s;
    return square;
}
// console.log(square+" before"); cannot use square before initialization error 

let square = findSquare(5);
console.log(square+" square");