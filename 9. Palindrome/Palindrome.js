/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let value = [];
    let i = 0;
    if(x < 0) return false;
    while(x > 0){
       value[i] = Math.floor(x % 10);
       x = Math.floor(x / 10); 
       i++;
        console.log(value);
    }
    let lowerend = 0;
    for(let upperend = (i-1); upperend > 0; upperend--){
        if(value[upperend] != value[lowerend]){
            return false;
        }
        else{
            lowerend++;
            if(lowerend==upperend) return true;
        }
    }
    return true;
};
