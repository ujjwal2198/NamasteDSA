/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {

    let lastIndex = s.length-1;
    let temp = "a";

    // important thing is that we need to update from lastIndex to firstIndex but only till lastIndex > firstIndex
    // as when lastindex reach till zero it reverse again to original
    // so always when you use last and first index you need to put condition of lastindex > i
    // otherwise both will reach till ends and may make changes undo

    for(let i=0;lastIndex>i;i++){

        temp = s[lastIndex];
        s[lastIndex] = s[i];
        s[i] = temp;
        lastIndex-=1;

    }
    
};