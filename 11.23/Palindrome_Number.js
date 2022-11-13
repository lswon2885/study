var isPalindrome = function (x) {
  //문자열로 변환하고, 쪼개고 뒤집고 다시 합침
  revInt = String(x).split("").reverse().join("");
  //문자열 값 확인
  console.log(revInt);
  //다시 숫자로 타입변환해주고
  var a = parseInt(revInt);
  console.log(a);
  //값 리턴하고
  if (x == a) {
    return true;
  } else {
    return false;
  }
};
isPalindrome(123);
//if조건문으로 값그대로랑 값 뒤집은거랑 비교해서 결과값 리턴하기
