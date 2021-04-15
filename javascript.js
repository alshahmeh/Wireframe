'use strict';
let x=0;
alert('Hello my name is Ali and I will play with you about guessing game');
let yourName=prompt('So,What is your name').toLocaleLowerCase();
function putMyOld(years){
  let old=prompt('Nice to meet you'+' '+yourName+' '+'I will ask you 7 questions first can you guess How old am I?');
  if(old<years){
    alert('No I am bigger than'+' '+old);}
  else if(old>years){alert('No I am less than'+' '+old);
  }
  else{alert('good job you are very lucky'); x=x+1;
    }
putMyOld(27);

alert('can you guess where am I from, I wil show you some options just  write that?');
function guessMyCountry(){
  let country=prompt('Jordan'+'    '+'Syria'+'    '+'Palestine').toLocaleLowerCase();
  switch(country){
  case 'jordan':alert('no I am sorry'); break;
  case 'syria':alert('yes good job');x=x+1; break;
  case 'palestine':
    alert('no I am sorry'); break;
  default:
    alert('no I am sorry try again'); break;
  }}
guessMyCountry();

function checkMyUniversity(myUniversity){
  let university=prompt('guess what is my universty name').toLocaleUpperCase();
  if(university===myUniversity){
    alert('GOOD JOB');x=x+1;}
  else{
    alert('no iam sorry');}}
checkMyUniversity('ALZARQA');

function checkMySpeciality(major){
  let speciality=prompt('so can you guess my speciality');
  if(speciality===major){
    alert('GOOD JOB');x=x+1;}
  else{
    alert('no iam sorry');}}
checkMySpeciality('software engineering');

function checkKind(yourmood){
  let kind=prompt('so'+' '+yourName+' '+' are you happy?  just say yes or no ').toLocaleLowerCase();
  if(kind===yourmood){
    alert('GOOD JOB you are hopefull person');x=x+1;}
  else{
    alert('no iam sorry you should be happy');}}
checkKind('yes');


let randomNumbers=Math.random();
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
checkFruites();
alert('your score is'+' '+x+' from '+7);
