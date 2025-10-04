arr = [1,3,43,2,7,4];

function searchElement(arr,num){
    for(let i =0;i<arr.length;i++){
        if(arr[i]==num){
            return i;
            // console.log("Ement Present"+i);
        }
    }
    return -1;
}

let x = searchElement(arr,7);
if(x!=-1)
console.log(x);

x = searchElement(arr,70);

if(x!=-1)
console.log(x);