function solution(s) {
  var answer = "";
  let stringArr;
  // stringArr = s.split(" ").sort((a,b)=>a-b); // 오름차순
  // stringArr = s.split(" ").sort((a,b)=>b-a); // 내림차순

  stringArr = s.split(" ");
  answer = Math.min(...stringArr) + " " + Math.max(...stringArr);
  // answer = stringArr[0] + " " + stringArr[stringArr.length - 1];
  console.log(answer);
  return answer;
}
solution("-4 -3 -2 -1");
