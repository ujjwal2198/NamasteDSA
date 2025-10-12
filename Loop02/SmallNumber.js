let arr = [21,1,2,4,9,3,2,3];

let smallMaintain=arr[0];

for(let x=0;x<arr.length;x++){
    if(smallMaintain>arr[x]){
        smallMaintain=arr[x];
    }
}

console.log("Smallest Number is "+smallMaintain);

// Javascrpit have a concept of Infinity and -Infinity Concept in JS