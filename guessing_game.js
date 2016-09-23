'use strict';

var score = 0;
var userName = prompt('Who are you?');

askName();
question1();
question2();
question3();
question4();
question5();
question6();
question7();
finalScore();

function askName() {
  if (userName.toLowerCase() === 'idk' || userName === 'i dont know' || userName === 'i don\'t know') {
    alert('That is unfortunate');
    console.log('User: they don\'t know i guess');
  }
  else if (userName.toLowerCase() === 'no' || userName.toLowerCase() === 'n' || userName.toLowerCase() === 'nope' || userName.toLowerCase() === 'na' || userName.toLowerCase() === 'nah' || userName.toLowerCase() === '') {
    alert('fine');
    console.log('hmph');
  }
  else if (userName === null) {
    return;
  }
  else {
    console.log('User: ' + userName);
    alert('Sup ' + userName + '. Let\'s see how much you can guess about me.');
  }
}

//question 1
function question1() {
  console.log('question one');
  var questionOne = prompt('Would I rather be using Windows?').toLowerCase();
  if (questionOne === 'yes' || questionOne === 'y' || questionOne === 'yeah' || questionOne === 'yup' || questionOne === 'yep' ) {
    alert('Yes. But unfortunately that particular dumb ass box continues to be dumb and an ass, so here we are.');
    ++score;
    console.log('Correct answers: ' + score);
  }
  else if (questionOne === 'no' || questionOne === 'n' || questionOne === 'nope' || questionOne === 'na' || questionOne === 'nah') {
    alert('i die');
  }
  else if (questionOne === 'idk' || questionOne === 'i dont know' || questionOne === 'i don\'t know') {
    alert('I know you don\'t know, that\'s why I said guess!');
  }
  else if (questionOne === null) {
    return;
  }
  else {
    alert('I am dissapoint');
  }
}

//question 2
function question2() {
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
  else if (questionTwo === 'idk' || questionTwo === 'i dont know' || questionTwo === 'i don\'t know') {
    alert('I know you don\'t know, that\'s why I said guess!');
  }
  else if (questionTwo === null) {
    return;
  }
  else {
    alert('u silly');
  }
}

//question 3
function question3() {
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
  else if (questionThree === 'idk' || questionThree === 'i dont know' || questionThree === 'i don\'t know') {
    alert('I know you don\'t know, that\'s why I said guess!');
  }
  else if (questionThree === null) {
    return;
  }
  else {
    alert('like r u even trying');
  }
}

//question 4
function question4() {
  console.log('question four');
  var questionFour = prompt('What season was I born in?').toLowerCase();
  if (questionFour === 'summer' || questionFour === 'sumer' || questionFour === 'usmer' || questionFour === 'baseball') {
    alert('That\'s the one! That might explain why I hate the cold.');
    ++score;
    console.log('Correct answers: ' + score);
  }
  else if (questionFour === 'fall' || questionFour === 'winter' || questionFour === 'spring' || questionFour === 'football' || questionFour === 'hockey' || questionFour === 'basketball' || questionFour === 'holiday') {
    alert('Nope! Correct answer is summer (or baseball).');
    ++score;
    console.log('Correct answers: ' + score);
  }
  else if (questionFour === 'idk' || questionFour === 'i dont know' || questionFour === 'i don\'t know') {
    alert('I know you don\'t know, that\'s why I said guess!');
  }
  else if (questionFour === 'no' || questionFour === 'n' || questionFour === 'nope' || questionFour === 'na' || questionFour === 'nah' ) {
    alert('fine');
  }
  else if (questionFour == '') {
    alert('say something damn it');
  }
  else if (questionFour === null) {
    return;
  }
  else {
    alert('wat r u even saying');
  }
}

//question 5
function question5() {
  console.log('question five');
  var questionFive = prompt('Which of these places have I NOT lived?\n\nCalifornia\nLouisiana\nFlorida\nIndia\nConnecticut').toLowerCase();
  if (questionFive === 'california' || questionFive === 'ca' || questionFive === 'cali' || questionFive === 'florida' || questionFive === 'fl' || questionFive === 'india' || questionFive === 'connecticut' || questionFive === 'ct' ) {
    alert('Nope! I have indeed lived there.');
  }
  else if (questionFive === 'louisiana' || questionFive === 'la' || questionFive === 'louisianna') {
    alert('That\'s right! Though I\'ve always wanted to. Maybe in a couple of years...');
    ++score;
    console.log('Correct answers: ' + score);
  }
  else if (questionFive === 'idk' || questionFive === 'i dont know' || questionFive === 'i don\'t know') {
    alert('I know you don\'t know, that\'s why I said guess!');
  }
  else if (questionFive === null) {
    return;
  }
  else {
    alert('can u not spell or');
  }
}

//question 6
function question6() {
  console.log('question six');
  var questionSix = prompt('What is a kind of music that I regularly listen to?').toLowerCase();
  var sixArray = ['alternative', 'classic rock', 'hip-hop', 'rap', 'jazz', 'rock', 'pop', 'pop punk', 'top 40', 'contemporary'];
  if (sixArray.indexOf(questionSix) > -1) {
    alert('That\'s one!');
    ++score;
    console.log('Correct answers: ' + score);
  }
  else if (questionSix === 'no' || questionSix === 'n' || questionSix === 'nope' || questionSix === 'na' || questionSix === 'nah' || questionSix === '') {
    alert('sigh');
  }
  else if (sixArray.indexOf(questionSix) < 0) {
    alert('I enjoy most types of music! But the ones I listen to most regularly are [classic or other] rock, hip-hop, jazz, and contemporary.');
  }
  else if (questionSix === null) {
    return;
  }
  else if (questionSix === 'idk' || questionSix === 'i dont know' || questionSix === 'i don\'t know') {
    alert('I know you don\'t know, that\'s why I said guess!');
  }
}

//question 7
var questionSeven;
function question7() {
  console.log('question seven');
  var tries = 0;
  var tryCount = 10;
  while (tryCount > 0) {
    questionSeven = prompt('How many times have I moved? You get ten tries!', tryCount);
    if (parseInt(questionSeven) === 12) {
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
    else if (parseInt(questionSeven) > 12) {
      alert('Too high!');
      ++tries;
      --tryCount;
      console.log('Tries: ' + tries);
    }
    else if (parseInt(questionSeven) < 12) {
      alert('Too low!');
      ++tries;
      --tryCount;
      console.log('Tries: ' + tries);
    }
    else if (questionSeven === 'idk' || questionSeven === 'i dont know' || questionSeven === 'i don\'t know') {
      alert('I know you don\'t know, that\'s why I said guess!');
      ++tries;
      --tryCount;
    }
    else if (questionSeven === null) {
      break;
    }
    else if (questionSeven === 'no' || questionSeven === 'n' || questionSeven === 'nope' || questionSeven === 'na' || questionSeven === 'nah' || questionSeven == '') {
      alert('fine');
      ++tries;
      --tryCount;
      console.log('Tries: ' + tries);
    }
    else {
      alert('Is that a number?');
      ++tries;
      --tryCount;
      console.log('Tries: ' + tries);
    }
  }
  if (tries > 9) {
    alert('Sorry! You ran out of tries. The answer is 12!');
  }
}

// FINAL SCORE
function finalScore() {
  if (questionSeven === null) {
    return;
  }
  else if (userName == 'idk' || userName == 'i dont know' || userName == 'i don\'t know' || userName == '') {
    alert('Your score is ' + score + ' out of 7, person who doesn\'t know their own name. Hooray for you!');
  }
  else {
    alert('Your score is ' + score + ' out of 7, ' + userName + '. Hooray for you!');
  }
}
