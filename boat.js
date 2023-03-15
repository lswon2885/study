// function solution(people, limit) {
//   var answer = 0;
//   var a = 0;

//   var c = people.sort();
//   console.log(c);
//   for (i = 0; i < people.length; i++) {
//     if (c[i] + c[i + 1] <= limit && c[i] <= limit) {
//       console.log(c[i] + "1111");
//       a += 1;
//     } else {
//       console.log("22222");
//       a += 1;
//     }
//     answer = a;

//   }
//   console.log(a);
//   return answer;
// }
function solution(people, limit) {
  var answer = 0;
  var a = 0;
  var v = 0;
  people.sort();
  console.log(people.length + "length");
  for (i = 0; i < people.length - 1; i++) {
    if (people[i] + people[i + 1] <= limit[0]) {
      a += 1;
    } else if (people[i] <= limit[0]) {
      a += 1;
    }
  }
  console.log(v);
  console.log(a);
  answer = a;
  console.log(answer + "ccccc");
  return answer;
}
solution([70, 50, 80, 50], [100]);
