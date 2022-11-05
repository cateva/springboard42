function unroll(matrix) {
    if(matrix.length === 0) {
        return []
    }
    let result = []
    let left = 0
    let right = matrix[0].length
    let top = 0
    let bottom = matrix.length
    
    while (left < right && top < bottom) {
        for (let index = left; index < right; index++) {
            result.push(matrix[top][index])
        }
        top++
        if (top === bottom) {
            break
        }
        for (let index = top; index < bottom; index++) {
            result.push(matrix[index][right - 1])
        }
        right--
        if (left === right) {
            break
        }
        
        for (let index = right - 1; index >= left; index--) {
            result.push(matrix[bottom - 1][index])
        }
        bottom--
        if (top === bottom) {
            break
        }
        for (let index = bottom - 1; index >= top; index--) {
            result.push(matrix[index][left])
        }
        left++
    }

    return result
};

module.exports = unroll;
