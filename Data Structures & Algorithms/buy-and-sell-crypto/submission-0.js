class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Infinity; // the lowest price we have seen
        let maxProfit = 0; // The most profit we gained

        for(let i = 0; i < prices.length; i++){
            // If we find a lower price then we update the floor
            if(prices[i] < minPrice){
                minPrice = prices[i]
            }
            // Check if selling today is a new record
            else{
                let currentProfit = prices[i] - minPrice;
                maxProfit = Math.max(maxProfit, currentProfit)
            }
        }


        return maxProfit;
    }
}
