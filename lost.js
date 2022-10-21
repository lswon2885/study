// function solution(n, lost, reserve) {
//   var answer = 0;
//   let cl = 0;
//   lost.sort();
//   reserve.sort();
//   console.log(lost);
//   for (i = 0; i < lost.length; i++) {
//   }
//   console.log(cl + "sdfjldsjaf23");

//   for (i = 0; i < lost.length; i++) {
//     console.log("sda");
//     if ([lost + -1] !== reserve) {
//       console.log("lost" + lost);
//     }
//     console.log(cl);
//   }
//   console.log("dd");
//   return answer;
// }
// solution([5], [2, 4], [1, 3, 5]);
function solution(n, lost, reserve) {
  var answer = 0;
  let cl = 0;
  lost.sort();
  reserve.sort();
  console.log(lost);

  for (i = 0; i <= reserve.length; i++) {
    if (lost[i] === reserve[i] - 1 || lost[i] === reserve[i] + 1) {
      console.log(reserve[i] + "reserve!!");
      console.log(lost[i] + "lost!!");
    }
    console.log(cl);
  }
  console.log("cl" + cl);
  return answer;
}
solution([5], [2, 4], [1, 3, 5]);
