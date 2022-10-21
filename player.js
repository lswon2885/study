function solution(p, c) {
  var answer = "";
  p.sort();
  c.sort();
  // let te1 = p.filter((x) => !c.includes(x));
  return (answer = console.log(p.filter((x) => !c.includes(x))));
  return answer;
  // return answer;
}
solution(["mislav", "stanko", "mislav", "ana"], ["mislav", "stanko", "ana"]);
