// function solution(s) {
//   var answer = "";
//   let a = s.toString().split(" ");
//   console.log(a);
//   var asc = a.toString().charAt(0);
//   var as = a.toString().toUpperCase();
//   console.log(asc);
//   console.log(as);
//   return answer;
// }
// function solution(s) {
//   var answer = "";
//   let d = s.toString().toLowerCase();
//   let c = d.toString().replace(/[0-9]/g, "");
//   let a = c.toString().replace(/\b[a-z]/g, (char) => char.toUpperCase());

//   console.log(a);
//   return answer;
// }

function solution(s) {
  var answer = "";
  //   let a = s.toString().split(" ");
  //문자 변환후 소문자로
  let c = s.toString().toLowerCase();
  //정규식으로 처리
  let a = c.toString().replace(/\b[a-z]/g, (char) => char.toUpperCase());

  console.log(c);
  console.log(a);

  answer = a;
  console.log(answer);
  return answer;
}
solution(["3people unFollowed me"]);