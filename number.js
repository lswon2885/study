function solution(x) {
  let a = x.toString().split("");
  let b = 0;

  for (i = 0; i < a.length; i++) {
    b += parseInt(a[i]);
  }
  console.log(x % b === 0); 
  return x % b === 0;

  // if (x % b === 0) {
  // } else {
  //   var answer = false;
  // }
  // console.log(answer);
  // return answer;
}
solution(10);
