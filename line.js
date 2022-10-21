function solution(n, k) {
  var answer = [];
  var s = 0;
  for (i = 1; i <= n; i++) {
    for (l = 1; l <= n; l++) {
      for (u = 1; u <= n; u++) {
        if (i !== l && l !== u && i !== u) {
          s++;
          if (s === k) {
            answer.push(i, l, u);
            console.log(i + "nnnn" + l + "llll" + u + "uuu");
          }
        }
      }
    }
  }
  console.log(answer);
  return answer;
}
solution(4, 5);
