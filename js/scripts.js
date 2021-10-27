//Utility Logic
function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

//Business Logic
function vowel(word) {
  const vowels = ["a", "e", "i", "o", "u"]
  let wordArray = [];
  wordArray = word.split()
  if (vowels.includes(wordArray[0])) {
    let newWord = word + "way";
    return newWord;
  }
  return false;
}

function consonants(word) {

}

function qu(word) {

}

function pigLatin(text) {
  //word array
  //call noInputtedWord
  //foreach loop over array
  //call vowel
  //call qu
  //call consenonts
  //close loop
  //join
  //return statement
}

//UI Logic