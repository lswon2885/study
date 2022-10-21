// function solution(s, n) {
//   var answer = "";
//   let str = "";

//   for (let i = 97; i <= 122; i++) {
//     if (String.fromCharCode(i) == "a") {
//       Number = n;
//       parseInt.i += n;
//       console.log("gd");
//       console.log(String.fromCharCode(i));
//       console.log(i);
//       str = String.fromCharCode(i + n);
//     }

//     console.log(str);
//     return answer;
//     console.log("ddd" + i);
//   }

//   // abcdefghijklmnopqrstuvwxyz
// }
// solution(["AB"], [1]);

function solution(s, n) {
  var answer = "";
  let str = "";
  let a = s.toString().split("");
  for (let i = 97; i <= 122; i++) {
    if (String.fromCharCode(i) == a) {
      str += String.fromCharCode(i);
      console.log("gd");
    }

    // abcdefghijklmnopqrstuvwxyz
    console.log(str);
    console.log(a);
    return answer;
  }
}
solution(["AB"], [1]);
