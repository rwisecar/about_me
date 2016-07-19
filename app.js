var userName = prompt('Hey there! What\'s your name?');

alert('Nice to meet you, ' + userName + '. Let\'s see how well you know me. I\'m going to ask you some questions. Please answer yes or no.');

var answerOne = prompt('Was Rachael born in Seattle?');

if (answerOne === 'Yes' || answerOne === 'yes' || answerOne === 'y' || answerOne === 'Y') {
  alert('Sorry, Rachael was born in NYC.')
} else if (answerOne === 'No' || answerOne === 'no' || answerOne === 'n' || answerOne === 'N') {
  alert('That\'s right, she was born in NYC.');
} else {
  alert('I\'m sorry, I don\'t understand your answer. Please answer with yes or no.')
};
