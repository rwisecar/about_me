"use strict";

var userName = prompt('Hey there! What\'s your name?');

alert('Nice to meet you, ' + userName + '. I\'m sure you want to get to know me better, so I\'m going to ask you some questions. Please answer yes or no.');

var answerOne = prompt('Was Rachael born in Seattle?');

if (answerOne === 'Yes' || answerOne === 'yes' || answerOne === 'y' || answerOne === 'Y') {
  alert('Sorry, Rachael was born in NYC.');
} else if (answerOne === 'No' || answerOne === 'no' || answerOne === 'n' || answerOne === 'N') {
  alert('That\'s right, she was born in NYC.');
} else {
  alert('I\'m sorry, I don\'t understand your answer. Please answer with yes or no.');
};

var answerTwo = prompt('Does Rachael have any pets?');

if(answerTwo === 'Yes' || answerTwo === 'yes' || answerTwo === 'Y' || answerTwo === 'y'){
  alert('You know it. She\'s got one dog, named Lucy, who is a total terror. But in a good way.');
} else if (answerTwo === 'No' || answerTwo === 'no' || answerTwo === 'N' || answerTwo === 'n'){
  alert('That\'s not right. She has one crazy, crazy dog, named Lucy.');
} else {
  alert('What was that? Please answer with a yes or no.');
};

var answerThree = prompt('True or False- the original Independence Day is one of Rachael\'s all time favorite movies.');

if(answerThree === 'True' || answerThree === 'true' || answerThree === 'T' === answerThree === 't'){
  alert('Absolutely it is.');
} else {
  alert('You\'ve got to be kidding me. ID4 is a classic.');
};

console.log("Yo what's up");
