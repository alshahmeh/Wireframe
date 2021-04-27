'use strict';
let x = 0;
alert('Hello my name is Ali and I will play with you about guessing game');
let yourName = prompt('So,What is your name').toLocaleLowerCase();
function putMyOld(years) {
  let old = prompt('Nice to meet you' + ' ' + yourName + ' ' + 'I will ask you 7 questions first am I 27?').toLocaleLowerCase();
  if (old === years) {
    alert('yes good job'); x = x + 1;
  }
  else if (old === 'no') { alert('No the ranswer is' + ' ' + old); }
  else { alert('sorry'); }}
putMyOld('yes');
alert('can you guess where am I from, I wil show you some options just  write yes or no?');
function guessMyCountry(){
  let country=prompt('Syria').toLocaleLowerCase();
  switch(country){
  case 'no':alert('no I am sorry'); break;
  case 'yes':alert('yes good job');x=x+1; break;
  default:
    alert('no I am sorry try again'); break;
  }}
guessMyCountry();
function checkMyUniversity(myUniversity){
  let university=prompt('guess yes or no my universty name is zarqa').toLocaleLowerCase();
  if(university===myUniversity){
    alert('GOOD JOB');x=x+1;}
  else{
    alert('no iam sorry');}}
checkMyUniversity('yes');
function checkMySpeciality(major){
  let speciality=prompt('so can you guess by no or yes my speciality is computer sience');
  if(speciality===major){
    alert('GOOD JOB');x=x+1;}
  else{
    alert('no iam sorry');}}
checkMySpeciality('no');
function checkKind(yourmood){
  let kind=prompt('so'+' '+yourName+' '+' are you happy?  just say yes or no ').toLocaleLowerCase();
  if(kind===yourmood){
    alert('GOOD JOB you are hopefull person');x=x+1;}
  else{
    alert('no iam sorry you should be happy');}}
checkKind('yes');
let randomNumbers=Math.floor(Math.random()*10);
function checkRandomnumber(randomNumber){
  let answer=prompt('so can you guess my lucky number ');
  let i=0;
  while(answer!==randomNumber&&i<4){
    if(answer<randomNumber){
      answer=prompt('No your answer is less than the number Please try again');}
    else if(answer>randomNumber){answer=prompt('No your answer is more than the number Please try again');}
    i++;
  }
  if(answer===randomNumber){alert('the answer is correct good job');x=x+1;}
  else{alert('sorry the correct answer is '+randomNumber);}}
checkRandomnumber(randomNumbers);
function checkFruites(){
  let fruites=['lemon','strawberries','oranges','limes','grapefruit','blackberries'];
  let answers=prompt('can you guess one from my favourite fruites').toLocaleLowerCase();
  let b=0;
  while((answers!==fruites[0]&&answers!==fruites[1]&&answers!==fruites[2]&&answers!==fruites[3]&&answers!==fruites[4]&&answers!==fruites[5])&&b<6){
    answers=prompt('no please try again');

    b++;
  }
  if(answers===fruites[0]||answers===fruites[1]||answers===fruites[2]||answers===fruites[3]||answers===fruites[4]||answers===fruites[5]){alert('the answer is correct good job');x=x+1;}
  else{alert('sorry the correct answer are :'+' '+fruites);}
}
checkFruites();
alert('your score is'+' '+x+' from '+7);

