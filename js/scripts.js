// Utility Logic

function noInputtedWord(text) {
  return ((text.trim().length === 0));
}

// Business Logic

function pigLatin(text) {
  let newSentance = "";
  
  if (noInputtedWord(text)) {
    return false;
  } else {
    const wordArray = text.split(" ");

    wordArray.forEach(function(word) {
      word.toLowerCase()
      if(word[0] === 'a' || word[0] === "e" || word[0] === "i" || word[0] === 'o' || word[0] === 'u'){
        let newWord = "";
        newWord = word + "way"
        newSentance += newWord + " "; 
      }
      else if(word[0] === "q" && word[1] === "u"){
        let newWord = "";
        newWord = word.slice(2) + "quway";
        newSentance += newWord + " ";
      }
      else if(word[0] != 'a' && word[0] != "e" && word[0] != "i" && word[0] != 'o' && word[0] != 'u'){
        let newWord = "";
        let placeholder = "";
        let otherPlaceholder = "";
        placeholder = word.slice(0,1);
        otherPlaceholder = word.slice(1);
        newWord = otherPlaceholder + placeholder + "ay";
        newSentance += newWord + " ";
      }
      else{
        newSentance;
      }
      
    });
    console.log(newSentance);
    return newSentance;
  }
}

// UI Logic
$(document).ready(function(){
  $("form#translator").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    

    if (passage === "") {
      $("#error").append("<p>Error! You have to enter a word or phrase!</p>");
    }
    else {
      $("#translation").html(pigLatin(passage));
      $("#error").hide();
    }
    
  });
});