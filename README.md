# _Pig Latin Translator_

#### By: _**Katie Pundt and Mike Watkins**_

#### _A Pig Latin translator_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_
* _GitHub repositories_
* _GitHub Pages_

## Description

_Users will enter a phrase or sentence into the webpage and it will be translated into Pig Latin and displayed back to them._

## Specs
* The program will take a entered phrase, translate it into Pig Latin, and display it back to the user. Example: _Pig latin is weird: Igpay atinlay isway eirdway_
* For words beginning with a vowel, add "way" to the end. For Pig Latin, vowels are "a," "e," "i," "o," and "u." Don't treat "y" as a vowel. Examples: "away" becomes "awayway" and "okay" becomes "okayway."
* For words beginning with one or more consonants, move all of the first consecutive consonants to the end and add "ay". Examples: "code" becomes "odecay" and "move" becomes "ovemay."
* If the first consonants include "qu", move the "q" and the "u." Don't forget about words like "squeal" where "qu" doesn't come first! Examples: "quick" becomes "ickquay" while "squeal" becomes "quealsay."
* The program will ignore non-alphabetic characters. Example: Special characters #$% are ignored! Example: ecialSpay aracterschay #$% areway ignoredway!
* If the user enters nothing and submits it, the program will display an error message and ask the user to enter a word or phrase to translate.

## Tests
```
Describe: pigLatin(text)

Test: It will add "way" to end of single word that begin with a vowel.
Code: pigLatin("away");
Expected Output: "awayway"

Test: It will add "way" to the end of any word that begins with a vowel.
Code: pigLatin("is an ant");
Expected Output: "isway anway antway"

Test: It will move all of the first consecutive consonants of a single word to the end and add "ay".
Code: pigLatin("code");
Expected Output: "odecay"

Test: It will move all of the first consecutive consonants of multiple words to the end and add "ay".
Code: pigLatin("Cool code");
Expected Output: "oolCay odecay"

Test: It will translate all words regardless of consonants or vowels.
Code: pigLatin("Code is cool");
Expected Output: "odeCay isway oolcay
  
Test: It will translate and put puncuation in the proper place
Code: pigLatin("Code is cool!");
Expected Output: "odeCay isway oolcay!"

Test: It will move qu words to the back of a word
Code: pigLatin("The quick brown fox");
Expected Output: "heTay ickquay rownbay oxfay"

Test: It will ignore input with non-words
Code: pigLatin("!@#$");
Expected Output:""

Test: It will display an error message if nothing is submitted.
Code: pigLatin("");
Expected Output:"Error! Please enter a word or a phrase."
```

## Setup/Installation Requirements

* _Navigate to https://github.com/kpundt93/pig-latin_
* _Click on the green "Code" button and copy the repository URL or click on the copy button_
* _Open the terminal on your desktop_
* _Once in the terminal, use it to navigate to your desktop folder_
* _Once inside your desktop folder, use the command "git clone https://github.com/kpundt93/pig-latin.git"_
* _After cloning the project, navigate into it using the command "cd pig-latin"_
* _Use the command "git remote" to confirm the creation of the new local repository_
* _Open the project with the code editor of your choice_

_Note: when using the commands listed above, do not include the quotation marks. They are used here for readability._

## Known Bugs

* _No known bugs_

## Contact Information
* _Katie Pundt, kzpundt@gmail.com_
* _Mike Watkins, michaelhugheswatkins@gmail.com_

## License
_MIT License: https://opensource.org/licenses/MIT_

Copyright (c) _2021_ _Katie Pundt and Mike Watkins_
