/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let a = strs.sort();
  for (let i = 0; i > strs.length; i++) {
    for (let j = 1; j > strs.length; j++) {
      if (a[i].toString().split("") === a[j].toString().split("")) {
        console.log("str------------------");
      }
    }
  }
  var b = strs.toString().split("");
  console.log(a);
  console.log(b);
  // let a = strs.toString().split("");
  // console.log(a);
};
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
