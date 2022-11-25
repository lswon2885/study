var generate = function(numRows) {
  let triangle = [[1],[1,1]]
console.log(triangle.length)
  if(numRows ===0){
      return[]
  } else if(numRows ==1){
      return [[1]]
  } else if(numRows ==2){
      return [[1],[1,1]]
  }else{
      for(let i =2; i< numRows; i++){
          addRow(triangle)
          
      }
  }
  return triangle
};
var addRow  = function(triangle){
    let previous = triangle[triangle.length -1]
    console.log(previous.length+"----pr i")
    let newRow =[1]
    for(let i =0; i<previous.length-1;i++){
        let current = previous[i]
        let next = previous[i+1]
        newRow.push(current + next)
    }
    console.log(newRow+"처음")
    newRow.push(1)
    console.log(newRow)
    return triangle.push(newRow)
}
generate(4)
// var arr = [];
// let a =0;
// for(var i=1; i<numRows+1; i++){
//     arr.push([i])
//     console.log(arr)
// }