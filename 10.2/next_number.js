function solution(n) {
  var answer = n;
  var t = n.toString(2).match(/1/g).length;
  while (true) {
    answer++;
    if (answer.toString(2).match(/1/g).length === t) break;
  }
  console.log(answer);
  return answer;
  // for (i = n + 1; i < n * 2; i++) {
  //   if (i.toString(2).split("1").length === t) {
  //     answer = i;
  //     console.log(i);
  //   }
  // }
  // console.log(i + "iii");
  // console.log(t);
}
solution(78);
