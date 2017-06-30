var countdownGenerator = function (x) {
  var count = x

  return function(){
    if(count > 0){
      var decreasingNum = count;
      count --;
      console.log("T-minus " + decreasingNum + "...");
    }else if(count === 0){
      console.log("Blast Off!");
      count --;
    }else{
      console.log("Rockets already gone, bub!");
    }
  }
}
var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!