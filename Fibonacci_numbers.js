function solution(n) {
  var answer = 0;
  var num_1 = n - 2;
  var num_2 = n - 1;

  answer += num_1 + num_2;

  console.log(answer);
  return answer;
}
solution(3);
