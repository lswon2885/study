function solution(nums) {
  var answer = 0;
  // for(var i = 0; i < nums.length; i++){

  // }
  // return answer;
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }
  answer = set.size; // 3
  // 최대 많은 종류 하지만, 이때 종류가 nums.length / 2 한 값을 넘으면 안댄다
  if (nums.length / 2 < set.size) {
    answer = nums.length / 2;
  }
  console.log(answer);
}
solution([3, 1, 2, 2]);
