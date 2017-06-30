function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var x = -1;

  var rollDie = function () {
    return Math.floor(1 + Math.random() * 6);
  }

  return function() {
    x ++
    return list[x]

  }

  console.log(rollDie());
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6