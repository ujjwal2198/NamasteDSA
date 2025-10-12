let arr = [20,20,10]

/*
    Approach
    we need to maintain second largest across the array
    this we cant do without largest
    once new large is coming the previous one we can put in second largest


    Missed Point
    May be latest wala hamesha upar rahe 
    but what if koi naya normal 2nd no ka hi mobile aa jaye 
    uske liye else lagana hoga

    Simple words we will track both if found largest update secondL to oldL
    else will compare with SecondL if greater than that then update secondL
*/

let large =0;
let secondLarge =0;

if(arr[0]>arr[1]){
    large=arr[0];
    secondLarge=arr[1];
}else if(arr[0]<arr[1]) {
    large=arr[1];
    secondLarge=arr[0];
}else{
    large=arr[1];
}

for(let x=0;x<arr.length;x++){
    if(arr[x]>large){
        // agar naya large market me aaaya turant hi 
        // older large mai le lunga 
        // jaise ghar me naya mobile aane par purana parents le lete hai
        secondLarge = large;
        large=arr[x];
    }else if(arr[x]>secondLarge && arr[x]!=large){
        secondLarge=arr[x];
    }

}

console.log(secondLarge);