
// You should implement your task here.

module.exports = function towelSort (matrix) {
    var result = [];
    if (!matrix) {
        return [];
    } else {
  
      for (var i = 0; i < matrix.length; i++) {
        if (i % 2 == 1) {
          matrix[i].reverse();
        }
        result.push(matrix[i]);
      }
    }
  
    return result.flat()
}
