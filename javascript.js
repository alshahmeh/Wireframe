'use strict';
let x=0;
/*console.log('Hello my name is Ali and I will play with you about guessing game');*/
alert('Hello my name is Ali and I will play with you about guessing game');
let yourName=prompt('So,What is your name').toLocaleLowerCase();
let old=prompt('Nice to meet you'+' '+yourName+' '+'I will ask you 7 questions first can you guess How old am I?');
if(old<27){/*console.log('No I am bigger than'+' '+old);*/
alert('No I am bigger than'+' '+old);}
else if(old>27){alert('No I am less than'+' '+old);/*console.log=('good job you are lucky'+' '+yourname);*/
}
else{alert('good job you are very lucky'); x=x+1;
/*console.log('No I am less than'+' '+old);*/}

alert('can you guess where am I from, I wil show you some options just  write that?');
/*console.log('can you guess where am I from, I wil show you some options just  write that?');*/
let country=prompt('Jordan'+'    '+'Syria'+'    '+'Palestine').toLocaleLowerCase();
switch(country){
    case 'jordan':/*console.log('no I am sorry');*/alert('no I am sorry'); break;
    case 'syria':alert('yes good job');x=x+1; break;
    case 'palestine':/*console.log('no I am sorry');*/
    alert('no I am sorry');  break;
    default:/*console.log('no I am sorry try again');*/
    alert('no I am sorry try again'); break;
}

let university=prompt('guess what is my universty name').toLocaleUpperCase();
if(university=='ALZARQA'){
    /*console.log('GOOD JOB');*/
alert('GOOD JOB');x=x+1;}
else{/*console.log('no iam sorry');*/
    alert('no iam sorry');}

let speciality=prompt('so can you guess my speciality');
if(speciality=='software engineering'){
    /*console.log('no iam sorry');*/
alert('GOOD JOB');x=x+1;}
else{/*console.log('no iam sorry');*/
    alert('no iam sorry');}


let kind=prompt('so'+' '+yourName+' '+' are you happy?  just say yes or no ').toLocaleLowerCase();
if(kind=='yes'){/*console.log('GOOD JOB you are hopefull person');*/
    alert('GOOD JOB you are hopefull person');x=x+1;}
else{/*console.log('no iam sorry');*/
    alert('no iam sorry you should be happy');}

    let randomNumber=Math.random();
    let answer=prompt('so can you guess my lucky number ');
    let i=0;
    while(answer!==randomNumber&&i<4){
        if(answer<randomNumber){
    answer=prompt('No your answer is less than the number Please try again');}
    else if(answer>randomNumber){answer=prompt('No your answer is more than the number Please try again');}
    i++;
}
if(answer==randomNumber){alert('the answer is correct good job');x=x+1;}
else{alert('sorry the correct answer is '+randomNumber);}


let fruites=["lemon","strawberries","oranges","limes","grapefruit","blackberries"]; 
let answers=prompt('can you guess one from my favourite fruites').toLocaleLowerCase();
let b=0;
while((answers!==fruites[0]&&answers!==fruites[1]&&answers!==fruites[2]&&answers!==fruites[3]&&answers!==fruites[4]&&answers!==fruites[5])&&b<6){
   answers=prompt('no please try again');

b++;
}
if(answers==fruites[0]||answers==fruites[1]||answers==fruites[2]||answers==fruites[3]||answers==fruites[4]||answers==fruites[5]){alert('the answer is correct good job');x=x+1;}
else{alert('sorry the correct answer are :'+' '+fruites);}
alert('your score is'+' '+x+' from '+7);