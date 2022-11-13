// var longestCommonPrefix = function (strs) {
//   const a = strs.toString();
//   // console.log(a + "a");
//   console.log(a);
// };
//배열값 하나씩 쪼개서 값들 서로 비교하기,
//같은값없음 인수하나 만들어서 반환하기.
//배열값 모두다 나눠서 같은문자 몇개 있는지 변환해서 길이값으로 나누기 하기
var longestCommonPrefix = function (strs) {
  let cur = strs[0];
  let temp = "";
  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < cur.length; j++) {
      if (cur[j] == strs[i][j]) {
        temp += cur[j];
      } else {
        break;
      }
    }
    console.log(temp + "11111tem");
    cur = temp;
    temp = "";
  }
  console.log(cur);
  return cur;
};
longestCommonPrefix(["flower", "flow", "flight", "f"]);
