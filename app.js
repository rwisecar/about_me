"use strict";

var userName = prompt('Hey there! What\'s your name?');
alert('Nice to meet you, ' + userName + '. I\'m sure you want to get to know me better, so I\'m going to ask you some questions.');

// question 1
var answerOne = prompt('Was Rachael born in Seattle? Please answer Yes or No.');

if (answerOne === 'YES' || answerOne === 'Y') {
  alert('Sorry, Rachael was born in NYC.');
} else if (answerOne === 'NO' || answerOne === 'N') {
  alert('That\'s right, she was born in NYC.');
} else {
  alert('I\'m sorry, I don\'t understand. Let\'s try a new question.');
};

// question 2
var answerTwo = prompt('Does Rachael have any pets? Again, please answer with Yes or No.');

if (answerTwo === 'YES' || answerTwo === 'Y'){
  alert('You know it. She\'s got one dog, named Lucy, who is a total terror. But in a good way.');
} else if (answerTwo === 'NO' || answerTwo === 'N'){
  alert('That\'s not right. She has one crazy, crazy dog, named Lucy.');
} else {
  alert('That just doesn\'t make sense to me. Let\'s try a new question.');
};

// question 3
var answerThree = prompt('Yes or No- the original Independence Day is one of Rachael\'s all time favorite movies.');

if (answerThree === 'YES' || answerThree === 'Y'){
  alert('Absolutely it is.');
} else if (answerThree === 'NO' || answerThree === 'N'){
  alert('You\'ve got to be kidding me. ID4 is a classic.');
} else {
  alert('Sorry, you\'re just not making any sense. Let\'s move on.');
};

// question 4
var answerFour = prompt('Rachael has a not-so-secret soft spot for Earth Wind and Fire. Yes or No?');

if (answerFour === 'YES' || answerFour === 'Y') {
  alert('Hey, September is a fantastic song.');
} else if (answerFour === 'NO' || answerFour === 'N') {
  alert('Hate to break it to you, but this one\'s true.');
} else {
  alert('Sorry, I didn\'t get that. Let\'s try the next question.')
};

// question 5
var answerFive = prompt('Okay, last question, I promise. Rachael has 5 little brothers. Yes or no?');

if (answerFive === 'YES' || answerFive === 'Y') {
  alert('Sorry, she\'s only got one. His name\'s Phil, and he was more than enough brother growing up.');
} else if (answerFive === 'NO' || answerFive === 'N'){
  alert('That\'s right, she only had one brother, Phil, and that was enough for her.');
} else {
  alert('Yeah, I don\'t think that makes sense.');
}



console.log("Yo what's up");
