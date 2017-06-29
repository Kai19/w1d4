var words = ["ground", "control", "to", "major", "tom"];


function map(words,func){
  var result = [];
  words.forEach(function(item){
    result.push(func(item));
  })
  console.log(result);
}



map(words, function(word) {
  return word.length;
});




// result [6, 7, 2, 5, 3]





