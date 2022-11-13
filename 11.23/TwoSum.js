var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        if (i != j) {
          return [i, j];
        }
      }
    }
  }
};
twoSum([3, 2, 3], 6);
// let arr = ["a", "b", "c", "d", "c"];

// let found = arr.findIndex((e) => e == "c");
// console.log(found);
