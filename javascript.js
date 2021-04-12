'use strict';
/*console.log('Hello my name is Ali and I will play with you about guessing game');*/
alert('Hello my name is Ali and I will play with you about guessing game');
let yourName=prompt('So,What is your name').toLocaleLowerCase();
let old=prompt('Nice to meet you'+' '+yourName+' '+'I will ask you 5 question first can you guess How old am I?');
/*console.log=('good job you are lucky'+' '+yourname);*/
/*console.log('No I am bigger than'+' '+old);*/
/*console.log('No I am less than'+' '+old);*/
if(old===27){/*console.log=('good job you are lucky'+' '+yourname);*/
alert=('good job you are lucky'+' '+yourname);}
else if(old<27){/*console.log('No I am bigger than'+' '+old);*/
alert('No I am bigger than'+' '+old);}
else{/*console.log('No I am less than'+' '+old);*/
alert('No I am less than'+' '+old);}
alert('can you guess where am I from, I wil show you some options just  write that?');
/*console.log('can you guess where am I from, I wil show you some options just  write that?');*/

let country=prompt('Jordan'+'    '+'Syria'+'    '+'Palestine').toLocaleLowerCase();
switch(country){
    case 'jordan':/*console.log('no I am sorry');*/alert('no I am sorry'); break;
    case 'syria':alert('yes good job'); break;
    case 'palestine':/*console.log('no I am sorry');*/
    alert('no I am sorry');  break;
    default:/*console.log('no I am sorry try again');*/
    alert('no I am sorry try again'); break;
}

let university=prompt('guess what is my universty name').toLocaleUpperCase();
if(university=='ALZARQA'){
    /*console.log('GOOD JOB');*/
alert('GOOD JOB');}
else{/*console.log('no iam sorry');*/
    alert('no iam sorry');}

let speciality=prompt('so can you guess my speciality');
if(speciality=='software engineering'){
    /*console.log('no iam sorry');*/
alert('GOOD JOB');}
else{/*console.log('no iam sorry');*/
    alert('no iam sorry');}


let kind=prompt('so the last question are you happy?  just say yes or no ').toLocaleLowerCase();
if(kind=='yes'){/*console.log('GOOD JOB you are hopefull person');*/
    alert('GOOD JOB you are hopefull person');}
else{/*console.log('no iam sorry');*/
    alert('no iam sorry you should be happy');}
