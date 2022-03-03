
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  } 
  const result = [];
    for (let i = 0; i < matrix.length; i++) {
      let start = i % 2 ? matrix[i].length -1 : 0;
      let step = i % 2 ? -1 : 1;
      for (let j = start; j < matrix[i].length && j >=0; j = j + step){
      result.push(matrix[i][j]);
    }
  }
  return result;
}
