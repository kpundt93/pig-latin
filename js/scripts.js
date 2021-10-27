//Utility Logic
function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

//Business Logic
function vowel(word) {
  let newWord = "";
  newWord = word + "way"
  return newWord;
}

function consonants(word) {
  let newWord = "";
  let placeholder = "";
  let otherPlaceholder = "";
  placeholder = word.slice(0,1);
  otherPlaceholder = word.slice(1);
  newWord = otherPlaceholder + placeholder + "ay";
}

function qu(word) {
  let newWord = "";
  newWord = word.slice(2) + "quway";
  return newWord;
}

function pigLatin(text) {
  //word array
  //call noInputtedWord
  //foreach loop over array
  // lowercase word
  //call vowel if(word[0] === 'a' || "e" || "i" || 'o' || 'u')
  //call qu if(word[0] === "q" && word[1] === "u")
  //call consenonts if(word[0] != 'a' || "e" || "i" || 'o' || 'u')
  //else
  //close loop
  //join
  //return statement
}

//UI Logic