function solution(n) {
  var answer = 0;
  var count = 1;
  for (i = 1; i < n; i++) {
    answer += i;
    for (j = i + 1; j < n; j++) {
      answer += j;
      if (answer === n) {
        count++;
        answer = 0;
        break;
      } else if (answer > n) {
        answer = 0;
        break;
      }
    }
  }
  return count;
}
solution(15);
