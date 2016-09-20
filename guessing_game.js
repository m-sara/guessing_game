  'use strict';
  var userName = prompt('Who are you?');
  console.log('User: ' + userName);
  alert('Sup ' + userName + '. Let\'s see how much you can guess about me.');
  var score = 0;

//question 1
  console.log('question one');
  var questionOne = prompt('Would I rather be using Windows?').toLowerCase();
  if (questionOne === 'yes' || questionOne === 'y' || questionOne === 'yeah' || questionOne === 'yup' || questionOne === 'yep' ) {
    alert('Yes. But unfortunately that particular dumb ass box continues to be dumb and an ass, so here we are.');
    ++score;
    console.log('Correct answers: ' + score);
  }
  else if (questionOne === 'no' || questionOne === 'n' || questionOne === 'nope' || questionTwo === 'na' || questionTwo === 'nah') {
    alert('i die');
  }
  else {
    alert('I am dissapoint');
  }

//question 2
  console.log('question two');
  var questionTwo = prompt('Do I have any pets?').toLowerCase();
  if (questionTwo === 'yes' || questionTwo === 'y' || questionTwo === 'yeah' || questionTwo === 'yup' || questionTwo === 'yep' ) {
    alert('Yup. One little old kitty bitch named Puppy. She is the bane of my existence and the love of my life. But mostly the first one.');
    ++score;
    console.log('Correct answers: ' + score);
  }
  else if (questionTwo === 'no' || questionTwo === 'n' || questionTwo === 'nope' || questionTwo === 'na' || questionTwo === 'nah') {
    alert('Na, I got one cat. She\'s not fat, she\'s big-boned. We\'re like an old married couple. And one of us shits in a box.');
  }
  else {
    alert('u silly');
  }

//question 3
  console.log('question three');
  var questionThree = prompt('Do I hate the cold?').toLowerCase();
  if (questionThree === 'yes' || questionThree === 'y' || questionThree === 'yeah' || questionThree === 'yup' || questionThree === 'yep' ) {
    alert('That is correct. You win this question. Here is your prize. Just kidding. There is no prize. \n\n...Unless you want a cat?');
    ++score;
    console.log('Correct answers: ' + score);
  }
  else if (questionThree === 'no' || questionThree === 'n' || questionThree === 'nope' || questionThree === 'na' || questionThree === 'nah') {
    alert('Unless the temperature is above 75°F, ya girl not interested in going outside.');
  }
  else {
    alert('like r u even trying');
  }

//question 4
  console.log('question four');
  var questionFour = prompt('What season was I born in?').toLowerCase();
  if (questionFour === 'summer' || questionFour === 'sumer' || questionFour === 'baseball') {
    alert('That\'s the one! That might explain why I hate the cold.');
    ++score;
    console.log('Correct answers: ' + score);
  }
  else if (questionFour === 'fall' || questionFour === 'winter' || questionFour === 'spring' || questionFour === 'football' || questionFour === 'hockey' || questionFour === 'basketball' || questionFour === 'holiday') {
    alert('Nope! Correct answer is summer (or baseball).');
    ++score;
    console.log('Correct answers: ' + score);
  }
  else {
    alert('wat r u even saying');
  }

//question 5
  console.log('question five');
  var questionFive = prompt('Which of these places have I NOT lived?\n\nCalifornia\nLouisiana\nFlorida\nIndia\nConnecticut').toLowerCase();
  if (questionFive === 'california' || questionFive === 'ca' || questionFive === 'cali' || questionFive === 'florida' || questionFive === 'fl' || questionFive === 'india' || questionFive === 'connecticut' || questionFive === 'ct' ) {
    alert('Nope! I have indeed lived there.');
  }
  else if (questionFive === 'louisiana' || questionFive === 'la') {
    alert('That\'s right! Though I\'ve always wanted to. Maybe in a couple of years...');
    ++score;
    console.log('Correct answers: ' + score);
  }
  else {
    alert('can u not spell or');
  }

//question 6
  console.log('question six');
  var questionSix = prompt('What is a kind of music that I regularly listen to?').toLowerCase();
  var sixArray = ['alternative', 'classic rock', 'hip-hop', 'rap', 'jazz', 'rock', 'pop', 'pop punk', 'top 40', 'contemporary'];
  if (sixArray.indexOf(questionSix) > -1) {
    alert('That\'s one!');
    ++score;
    console.log('Correct answers: ' + score);
  }
  else if (sixArray.indexOf(questionSix) < 0) {
    alert('I enjoy most types of music! But the ones I listen to most regularly are [classic or other] rock, hip-hop, jazz, and contemporary.');
  }

//question 7
  console.log('question seven');
  var tries = 0;
  while (tries < 10) {
    var questionSeven = parseInt(prompt('How many times have I moved? You get ten tries!', 0));
    if (questionSeven === 12) {
      ++tries;
      console.log('Tries: ' + tries);
      if (tries === 1) {
        alert('Yup! That\'s it! Or at least, that\'s how many I can remember.\n\nIt took you 1 try!');
      }
      else {
        alert('Yup! That\'s it! Or at least, that\'s how many I can remember.\n\nIt took you ' + tries + ' tries!');
      }
      ++score;
      console.log('Correct answers: ' + score);
      break;
    }
    else if (questionSeven > 12) {
      alert('Too high!');
      ++tries;
      console.log('Tries: ' + tries);
    }
    else if (questionSeven < 12) {
      alert('Too low!');
      ++tries;
      console.log('Tries: ' + tries);
    }
    else {
      alert('Is that a number?');
      ++tries;
      console.log('Tries: ' + tries);
    }
  }
  if (tries > 9) {
    alert('Sorry! You ran out of tries. The answer is 12!');
  }

// FINAL SCORE
  alert('Your score is ' + score + ' out of 7, ' + userName + '. Hooray for you!');
