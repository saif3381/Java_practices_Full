// JavaScript full course\02-javascript-fundamentals-part-1
  



         //  Linking A Javascript File
// let js = "amazing";
// if (js === "amazing") alert("Js Make fun!");
// console.log(40-10+9);






              // Value And variable

// console.log('hammad');   //value

// let firstName = 'saif';
// console.log(firstName);   //value save in variable 


// let lastName = "ali";
// console.log(lastName);

// give the understandable name to define a variable 
// let lastJob ='programmer';
// console.log(lastJob);
// let recentJob ='teacher';
// console.log(recentJob);









            //primitive data types   (pass by value)

// let javascriptIsFun = true;
// console.log(typeof javascriptIsFun);


// let javascriptIsNotFun = 'yes';
// console.log(typeof javascriptIsNotFun);

// let javascript = 23;
// console.log(typeof javascript);

// let java;
// console.log(typeof java);

// console.log(typeof null);




                 // let,const,var
// let age = '23'; 
// age ='30';      //re-assgin and mutable

// console.log(age);

// const birthday="1990";
// birthday='2000';   //not re-assign and immutable
// console.log(birthday);


             // code challenge #1 
// const massMark = 78;
// const heightMark = 1.69;

// console.log(massMark+" "+ heightMark);

// const massJohn = 92;
// const heightJohn = 1.76;

// console.log(massJohn+" "+ heightJohn);

// BMIMark = massMark/heightMark ** 2 ;
// console.log(BMIMark);

// BMIJohn = massJohn/(heightJohn * heightJohn) ;
// console.log(BMIJohn);

// const markHeigherBMI = BMIMark > BMIJohn;

// console.log(markHeigherBMI);



// const massMark = 95;
// const heightMark = 1.88;

// console.log(massMark+" "+ heightMark);

// const massJohn = 60;
// const heightJohn = 1.76;

// console.log(massJohn+" "+ heightJohn);

// BMIMark = massMark/heightMark ** 2 ;
// console.log(BMIMark);

// BMIJohn = massJohn/(heightJohn * heightJohn) ;
// console.log(BMIJohn);

// const markHeigherBMI = BMIMark > BMIJohn;

// console.log(markHeigherBMI);




           //Template literals 

// const firstName ='Ali';
// const age = '23';
// const job ='teacher';
// const birthday = '1990';
// const year = '2024';


// const ali = "i'm " + firstName + ", a " + (year - birthday) + "  year of old "  + job ;
// console.log(ali);

// const aliNew = `i'm ${firstName} , a ${year-birthday} year of old ${job} `;
// console.log(aliNew);


// console.log('string \n\
//     multiple \n\
//     line');

//ES6 
// console.log(`string 
//     multipe
//     line`);


//template literal 
// code practices

// const massMark = 95;
// const heightMark = 1.88;

// console.log(massMark+" "+ heightMark);

// const massJohn = 100;
// const heightJohn = 1.76;

// console.log(massJohn+" "+ heightJohn);

// BMIMark = massMark/heightMark ** 2 ;
// console.log(BMIMark);

// BMIJohn = massJohn/(heightJohn * heightJohn) ;
// console.log(BMIJohn);

// const markHeigherBMI = BMIMark > BMIJohn;

// console.log(markHeigherBMI);

// if (BMIMark > BMIJohn){
//     console.log(`Mark's BMI ${BMIMark} is higher than John's! ${BMIJohn}`);

// }

// else{
//     console.log(`Mark's BMI ${BMIMark} is lower than John's! ${BMIJohn}`);
// }





                // if else statement 

// const age = '14';

// if ( age >= 20 ){
//     console.log(`he is  young boy`);
// }else{
//     const yearLeft= 20 - age;
//     console.log(`he is ${yearLeft}  year left `);
// }




// const birthYear = '1800';
// let century;
// if(birthYear >= 1990){
//     // console.log(``)
//     century = '21';

// }else{
//    century = '20';

// }
// console.log(century);



           // type conversion :

// const myYear = '2000';

// console.log(myYear- 18);
// console.log(myYear+ 18);   //consider a string

// console.log(Number(myYear) , myYear+18);

// console.log(String(23)+ "30");
// console.log(Number('hello'));   //output NaN
// console.log(typeof NaN);


        //type coercion

// console.log('im a ' + 23 +' old');

// console.log ('25' - ' 25 ' - 25);

// let n = '1' + 1;
// n = n + 1;
// console.log(n);

// let p = '1' + 1;
// p = p - 1;
// console.log(p);




          // false value     { 0 , '' ,  undefined , null , NaN}
        //   truly CSSMathValue{ {}, string , number }

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean({}));    empty object
// console.log(Boolean(23));
// console.log(Boolean());

// let height=0;
// let height="";
// let height;
// if (height){
//         console.log("yay height is defined");
// }else{
//         console.log("height is undefined");
// }


// const weight=40;
// if (weight){
//         console.log("yay weight is defined");
// }else{
//         console.log("yay weight is undefined");
// }



            // == & === 

// const age = 18;
// if (age == '18'){
//         console.log('loose equal  ');
// }
// if(age === 18){
//         console.log('age is strictly equal');
// }


// const favorite = prompt("enter an amazing number ");
// console.log(favorite);
// console.log(typeof favorite);


// if (favorite === 18){
//         console.log("amazing number 18");
// }else if( favorite === 7){
//         console.log('amazing number 7');
// }



                    // code 
// const dolphinScore =  (97 + 112 + 101);                   // (97 + 112 + 101)/3;             //(96 + 108 + 89)/3;
// const koalasScore =    (109 + 95 + 106 );                // (109 + 95 + 123)/3;            // (88 + 91 + 110 )/3;

// console.log(dolphinScore, koalasScore);

// if(dolphinScore > koalasScore){
//         console.log("dolphin win the match ");
// }else if(dolphinScore < koalasScore){
//         console.log("koalas win the match ");
// }else if(dolphinScore == koalasScore){
//         console.log("match will be draw ");
// }




             // switch statement

// const day = 'saturday';
// switch (day){
//         case 'Monday ':
//                 console.log('meeting day');
//                 break;

//         case 'Tuesday':
//                 console.log('working day');
//                 break;

//         case 'Wednesday':
//                 console.log('test day');
//                 break;
        
//         case 'Thursday':
//                 console.log('presentation day');
//                 break;

//         case 'friday':
//                 break;

//         case 'saturday':
//         case 'sunday':
//                 console.log('game day');
//                 break;


//         default:
//                 console.log('not a valid day');


// }




              //conditional , turnary operator

// const age =23;

// age >= 18 ? console.log('i like wine') : console.log('i like water');          //  way 1
//age >= 18? 'wine' : 'water';                                                    //  way 2

// const drink = age >= 18 ? 'WINE' : 'WATER ';                                    //way 3 
// console.log(drink);

// let drink2;                          //way 4 in if else statement

// if (age >= 18){
//      drink2 = 'wine';

// }else{
//         drink2 = 'water';

// }
// console.log(drink2);

// console.log(`i like to drink  ${age >= 18? 'wine' : 'water'}`);                     //way 5






                //code challenge 4

// const bill = 275;
// const tip = bill  >= 50 && bill <= 300 ? bill * 15/100 : bill * 20/100;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);










































