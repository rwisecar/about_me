"use strict";

var userName = prompt('Hey there! What\'s your name?');
alert('Nice to meet you, ' + userName + '. I\'m sure you want to get to know me better, so I\'m going to ask you some questions.');

var answerOne = prompt('Was Rachael born in Seattle? Please answer yes or no.');

if (answerOne === 'Yes' || answerOne === 'yes' || answerOne === 'y' || answerOne === 'Y') {
  alert('Sorry, Rachael was born in NYC.');
} else if (answerOne === 'No' || answerOne === 'no' || answerOne === 'n' || answerOne === 'N') {
  alert('That\'s right, she was born in NYC.');
} else {
  alert('I\'m sorry, I don\'t understand. Let\'s try a new question.');
};

var answerTwo = prompt('Does Rachael have any pets? Again, please answer with yes or no.');

if (answerTwo === 'Yes' || answerTwo === 'yes' || answerTwo === 'Y' || answerTwo === 'y'){
  alert('You know it. She\'s got one dog, named Lucy, who is a total terror. But in a good way.');
} else if (answerTwo === 'No' || answerTwo === 'no' || answerTwo === 'N' || answerTwo === 'n'){
  alert('That\'s not right. She has one crazy, crazy dog, named Lucy.');
} else {
  alert('That just doesn\'t make sense to me. Let\'s try a new question.');
};

var answerThree = prompt('True or False- the original Independence Day is one of Rachael\'s all time favorite movies.');

if (answerThree === 'True' || answerThree === 'true' || answerThree === 'T' || answerThree === 't'){
  alert('Absolutely it is.');
} else if (answerThree === 'False' || answerThree === 'false' || answerThree === 'F' || answerThree === 'f'){
  alert('You\'ve got to be kidding me. ID4 is a classic.');
} else {
  alert('Sorry, you\'re just not making any sense. Let\'s move on.');
}


var answerFour = prompt('Rachael has a not-so-secret soft spot for Earth Wind and Fire. True or false?');

if (answerFour === 'True' || 'true' || 'T' || 't') {
  alert('Hey, September is a fantastic song.');
} else {
  alert('Sorry, this one\'s true.');
};




console.log("Yo what's up");
