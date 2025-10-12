/**
 * @param {number} x
 * @return {boolean}
 */
 /*
  for palindrom 1234
  reverse - original = 0 than palin
  we can get last everytime by mod 
  we can remove the taken by divide 10 so that new mod we will get
  4321
 */
var isPalindrome = function(x) {
    if(x < 0){
        return false;
    }

    let dupNum = x;
    let reverse = 0;
    while(dupNum>0){
        let mod = dupNum % 10;
        reverse = reverse*10 + mod;
        dupNum = Math.floor(dupNum / 10);
    }
    
    return reverse===x;

};