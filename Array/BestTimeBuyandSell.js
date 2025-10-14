/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
// [7 , 4 , 9 , 2 , 1 , 4 , 6]

//Approach 
/**
    if we keep track of minimum number per index
    and if we keep track of max Profit by simple formula
    MAX(currentNumber - minimumTillNow = profit at that index)
 */

 let minTillNow = prices[0];
 let maxTillNow = 0;
 let currentProfit =0;

 for(let i=0;i<prices.length;i++){

    // Max per index and Maximinum at particular index
    currentProfit = prices[i]-minTillNow;
    maxTillNow = Math.max(maxTillNow,currentProfit);
    
    if(minTillNow>prices[i]){
        minTillNow = prices[i];
    }

 }

 return maxTillNow;
    
};