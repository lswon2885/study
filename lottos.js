// function solution(lottos, win_nums) {
//   var answer = [];
//   if (solution(lottos, win_nums)) {
//     lottos.sort();
//     win_nums.sort();
//     for (var i = 0, n = lottos.length; i < n; i++) {
//       if (lottos[i] != win_nums[i]) {
//         console.log("배열의 값이 다릅니다.");
//       } else {
//         console.log("배열의 길이가 다릅니다.");
//       }
//     }

//     return answer;
//   }
// }
// solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);

function solution(lottos, win_nums) {
  var answer = [];

  const win = (length) => {
    if (length === 0) length = 1;
    return 7 - length; // 5
  };

  const low = lottos.filter((x) => win_nums.includes(x)).length; //2
  console.log(win(low));

  // 4
  const high = lottos.filter((x) => x === 0).length + low;
  console.log(win(high));
  answer.push(win(high), win(low));
  console.log(answer);
  return answer;
}
solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);

// lottos는 길이 6인 정수 배열입니다.
// lottos의 모든 원소는 0 이상 45 이하인 정수입니다.
// 0은 알아볼 수 없는 숫자를 의미합니다.
// 0을 제외한 다른 숫자들은 lottos에 2개 이상 담겨있지 않습니다.
// lottos의 원소들은 정렬되어 있지 않을 수도 있습니다.
// win_nums은 길이 6인 정수 배열입니다.
// win_nums의 모든 원소는 1 이상 45 이하인 정수입니다.
// win_nums에는 같은 숫자가 2개 이상 담겨있지 않습니다.
// win_nums의 원소들은 정렬되어 있지 않을 수도 있습니다.
