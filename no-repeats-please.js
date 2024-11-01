
permAlone('aab');
function permut(string) {
  if (string.length < 2) return string; // This is our break condition

  var permutations = []; // This array will hold our permutations
  for (var i = 0; i < string.length; i++) {
    var char = string[i];

    // Cause we don't want any duplicates:
    // if (string.indexOf(char) != i) // if char was used already
      // continue; // skip it this time

    var remainingString = string.slice(0, i) + string.slice(i + 1, string.length); //Note: you can concat Strings via '+' in JS

    for (var subPermutation of permut(remainingString))
      permutations.push(char + subPermutation)
  }
  
  return permutations;
}
function permAlone(str) {
  const permutationsArray = permut(str);
  const permutationsAloneArr = []
  
  for (var permute of permutationsArray){
    let noConsecutive = true;
    for(let i = 1; i< permute.length;i++){
      if(permute[i] === permute[i-1]){
        noConsecutive = false;
      }
    }
    if(noConsecutive){
      permutationsAloneArr.push(permute);
    }
  }

  return permutationsAloneArr.length;
}
console.log(permut("aaa"))
console.log(permAlone("aab"));
