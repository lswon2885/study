function solution(n, words) {
  var answer = [];
  console.log(words.length);
  var count = 0;
  for (i = 0; i < words.length - 1; i++) {
    if (words[i].charAt(words[i].length - 1) === words[i + 1].charAt(0)) {
      console.log(words[i].charAt(words[i].length - 1) + "------------start");
      console.log(words[i + 1].charAt(0) + "----------end");
      console.log(i + "-------iiii");
      console.log(i + 1 + "번째");
      count++;
    } else if (
      words[i].charAt(words[i].length - 1) !== words[i + 1].charAt(0)
    ) {
      console.log("kkkk");
      answer.push(count % n, count);
      console.log(answer);
      return answer;
    }
  }
  answer.push(0, 0);
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log("Hello Javascript");
  console.log(answer);
  return answer;
}
solution(2, ["hello", "one", "even", "never", "row", "world", "draw"]);
