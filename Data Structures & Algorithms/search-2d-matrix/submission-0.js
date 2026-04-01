class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
            if(!matrix || matrix.length === 0) return false;

    const m = matrix.length;
    const n = matrix[0].length;

    let right = (m * n) - 1;
    let left = 0;

    while(left<=right){
        //2. find the midpoint
        let mid = Math.floor((left + right)/2);

        let midValue = matrix[Math.floor(mid/n)][mid%n];

        if(midValue === target) {
            return true;
        }
        else if(midValue < target){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
    return false;
    }
}
