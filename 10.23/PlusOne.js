var plusOne = function (digits) {
  console.log(digits);
  // let a = digits.length;
  // let b = digits[a - 1] + 1;
  // digits[a - 1] = digits[a - 1] + 1;
  let c = digits.join("");
  const v = BigInt(c) + 1n;
  console.log(22222, BigInt(c)+1n);
  let a = v.toString().split("");
  let newArr = [];
  digits = a;
  digits.forEach((item) => newArr.push(parseInt(item)));
  // console.log(a);
  // console.log(digits);
  // console.log(v);
  // return (v + "").split("");
  // for (let i = 0; i > digits.length; i++) {}
};
plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);
// 배열을 숫자로 바꾸고, 계산후에 다시 배열로 만들기
