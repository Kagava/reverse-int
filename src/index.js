module.exports = function reverse (n) {
    let str = n.toString(10);
    let ans = '';
    if (n < 0) {
        for (let i = str.length - 1; i > 0; i--) {
            ans = ans + str[i];
        }
    }
    else {
        for (let i = str.length - 1; i >= 0; i--) {
            ans = ans + str[i];
        }
    }
    
    
    return ans;
}
  
