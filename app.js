/* How to make CSS load before JS?? */
'use strict';

var userName = prompt('Hey there! What\'s your name?');
alert('Nice to meet you, ' + userName + '. I\'m sure you want to get to know me better, so I\'m going to ask you some questions.');

// question 1
var inputOne = prompt('Was Rachael born in Seattle? Please answer Yes or No.');

var answerOne = inputOne.toUpperCase();

console.log(answerOne);

if (answerOne === 'YES' || answerOne === 'Y') {
  alert('Sorry, Rachael was born in NYC.');
  var score1 = 0;
} else if (answerOne === 'NO' || answerOne === 'N') {
  alert('That\'s right, she was born in NYC.');
  var score1 = 1;
} else {
  alert('I\'m sorry, I don\'t understand. Let\'s try a new question.');
  var score1 = 0;
};

// question 2
var inputTwo = prompt('Does Rachael have any pets? Again, please answer with Yes or No.');

var answerTwo = inputTwo.toUpperCase();

console.log(answerTwo);

if (answerTwo === 'YES' || answerTwo === 'Y'){
  alert('That\'s true. She\'s got one dog, named Lucy, who is a total terror. But in a good way.');
  var score2 = 1;
} else if (answerTwo === 'NO' || answerTwo === 'N'){
  alert('That\'s not right. She has one crazy dog, named Lucy.');
  var score2 = 0;
} else {
  alert('That just doesn\'t make sense to me. Let\'s try a new question.');
  var score2 = 0;
};

// question 3
var inputThree = prompt('Yes or No- the original Independence Day is one of Rachael\'s all time favorite movies.');

var answerThree = inputThree.toUpperCase();

console.log(answerThree);

if (answerThree === 'YES' || answerThree === 'Y'){
  alert('Absolutely it is.');
  var score3 = 1;
} else if (answerThree === 'NO' || answerThree === 'N'){
  alert('You\'ve got to be kidding me. ID4 is a classic.');
  var score3 = 0;
} else {
  alert('Sorry, you\'re just not making any sense. Let\'s move on.');
  var score3 = 0;
};

// question 4
var inputFour = prompt('Rachael has a not-so-secret soft spot for Earth Wind and Fire. Yes or No?');

var answerFour = inputFour.toUpperCase();

console.log(answerFour);

if (answerFour === 'YES' || answerFour === 'Y') {
  alert('Hey, September is a fantastic song.');
  var score4 = 1;
} else if (answerFour === 'NO' || answerFour === 'N') {
  alert('Hate to break it to you, but this one\'s true.');
  var score4 = 0;
} else {
  alert('Sorry, I didn\'t get that. Let\'s try the next question.')
  var score4 = 0;
};

// question 5
var inputFive = prompt('Rachael has 5 little brothers. Yes or no?');

var answerFive = inputFive.toUpperCase();

console.log(answerFive);

if (answerFive === 'YES' || answerFive === 'Y') {
  alert('Sorry, she\'s only got one. His name\'s Phil, and he was more than enough brother growing up.');
  var score5 = 0;
} else if (answerFive === 'NO' || answerFive === 'N'){
  alert('That\'s right, she only had one brother, Phil, and that was enough for her.');
  var score5 = 1;
} else {
  alert('Yeah, I don\'t think that makes sense.');
  var score5 = 0;
};


//question 6

var i = 0;
while (i < 4){
  var answerSix = parseInt(prompt('How old is Rachael?'));
    if(answerSix < 29){
      alert('Your guess is too low! Try again.');
      i++;
      var score6 = 0;
    } else if (answerSix > 29){
      alert('Your guess is too high! Try again.');
      i++;
      var score6 = 0;
    } else if (isNaN(answerSix) === true){
      alert('That\'s not even a number. Try again.');
      i++;
      var score6 = 0;
    } else {
      alert('That\'s right!');
      i=5;
      var score6 = 1;
    };
    
    if ((i === 4) && (answerSix !== 29)){
      alert('Sorry, you\'ve run out of guesses. Rachael is 29 years old.');
    };
};

//Question 7

var favoriteThings = ['puppies', 'monster movies', 'whiskers on kittens', 'crossword puzzles', 'crafts', 'bourbon'];

var guesses = 0;
while (guesses < 6){
  var inputSeven = prompt('What is one of Rachael\'s favorite things?');
  var answerSeven = inputSeven.toLowerCase();
  for(var j = 0; j < favoriteThings.length; j++){
    var arrayElement = favoriteThings[j];
    console.log('This is my array element' , arrayElement);
    console.log('This is my user input' , answerSeven);
    if(answerSeven === arrayElement){
      console.log('Right Comparison');
      var comparison = true;
      guesses = 7;
      break;
    } else {
      console.log('Wrong Comparison');
      var comparison = false;
    };
  };

  if (comparison === true){
    alert('That IS one of my favorite things!');
    var score7 = 1;
  } else {
    alert('Sorry, that thing you said is not one of my favorites. Try again.');
    var score7 = 0;
  };
  guesses++;
};
alert('Curious about the rest of my favorite things? Here they are: puppies, monster movies, whiskers on kittens, crossword puzzles, crafts, and bourbon.');

/*
Score Message
*/

var scoreTotal = score1 + score2 + score3 + score4 + score5 + score6 + score7;

if (scoreTotal > 3){
  alert('Congratulations, ' + userName + ', you scored ' + scoreTotal + ' out of 7 total questions. Great job!');
} else {
  alert('Hey there, ' + userName + ', you scored ' + scoreTotal + ' out of 7 total questions. Better luck next time.');
};
