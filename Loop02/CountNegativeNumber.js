let arr = [-1 ,-2,3,-7,9,3,9,0,-3];
let countZero=0;

for(let x=0;x<arr.length;x++){
    if(arr[x]<0){
        countZero+=1;
    }
}

console.log(countZero);