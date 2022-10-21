function solution(price, money, count) {
  var answer = -1;
  let pay = 0;
  for (i = 0; i <= count; i++) {
    pay += price * i;
    console.log(pay);
  }
  answer = pay - money;
  console.log(answer);
  return answer;
}
solution([3], [20], [4]);
