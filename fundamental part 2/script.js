//function

// function student() {
//     console.log("i am uni student ");

// }
// student();

// function fruitJuice(orange, apple) {
//     console.log(orange, apple);

//     const juice = `juice with ${orange} orange and ${apple} apple`;
//     return juice;
// }

// const juiceResult = fruitJuice(5, 0);
// console.log(juiceResult);

// const orangeAppleJuice = fruitJuice(6, 7);
// console.log(orangeAppleJuice);




//functiion declartion 

// function calcAge1(birthYeah) {
//     return 2037 - birthYeah;

//        const result = 2037 -birthYeah;
//         return result;
// }
// const age1 = calcAge1(2000);

//               function expression     (its use a anonymous function)
// const calcAge2 = function (birthYeah){
//     return 2037 - birthYeah;

// }
// const age2 = calcAge2(2000);

// console.log(age1, age2);






               // Arrow function

//  const calcAge2 = function (birthYeah){
//     return 2037 - birthYeah;
//  }

// const calcAge2 = birthYeah => 2037- birthYeah;

//  const age2 = calcAge2(2000);
//  console.log( age2);


//  const retirementYear = (birthYeah , fristName )=> {
//     const age  = 2037 - birthYeah;
//     const retirement = 65 - age ;
//     // return retirement;
//     return (` ${fristName} retirement year is ${retirement}`);
//  }
//  console.log(retirementYear(2000 , 'Ali'));
//  console.log(retirementYear(1990 , 'hassan'));





                // function within s function 

// function cutFruitPieces (fruit){
//     return fruit * 3 ;
// }

// function fruitProcessor( apple , orange) {
//         const applePieces = cutFruitPieces(apple);
//         const orangePieces = cutFruitPieces(orange);

    
//         const juice = `juice with ${orangePieces} pieces of orange and ${applePieces}  pieces of apple`;
//         return juice;
//     }

// console.log(fruitProcessor(4 , 5));



// code challenge 5

// const calAvg = (a, b, c)=>(a + b+ c )/3;
// console.log(calAvg(3,4,5));

// const scoreDolphins = calAvg (44, 23, 71);
// const scoreKoalas = calAvg ( 65, 54, 49 );
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function ( avgDolphins, avgKoalas){
//     if (avgDolphins >= 2 * avgKoalas){
//         console.log(` Dolphin win ( ${avgDolphins} vs. ${avgKoalas}) `);
//     }else if( avgKoalas >= 2 * avgDolphins){
//         console.log(` koalas win ( ${avgDolphins} vs. ${avgKoalas}) `);
        
//     }else{
//         console.log(`no team win `);

//     }


// }
// checkWinner(scoreDolphins, scoreKoalas );

// checkWinner(440 , 550);











              // Arrays

// const calcAge = function(birthYeah){
//     return 2040 - birthYeah;
// }

// const years = [2000, 2005 , 2020, 2015];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length -1]);

// console.log(age1, age2, age3);

// const age = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
// console.log(age);



                // Operation method in array

// const friends = ['saif', 'bilal', 'rafay', 'fahem'];
// const newLength = friends.push('ijaz'); //add in last

// console.log(friends);
// console.log(newLength);

// friends.pop();             // remove in last 
// console.log(friends);

// friends.unshift('ali');  // add in start
// console.log(friends);

// friends.shift();  // remove in start
// console.log(friends);

// console.log(friends.indexOf('fahem'));
// console.log(friends.indexOf('haider'));

// console.log(friends.includes('fahem'));
// console.log(friends.includes('haider'));


// if (friends.includes('fahem')){
//     console.log('its is included');
// }

// if (friends.includes('haider')){
//     console.log('its is included');
// }




                //code challenge 5

// const calcTip = function(bills){
//     return  bills >= 50 && bills <= 300 ? bills * 15/100 : bills * 20/100;
// }
// const bills = [125, 555, 44];
// const tips =[calcTip (bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);



// Object

// const saif = {
//     firstName : 'saif',
//     lastName : 'ali',
//     job : 'student',
//     age: 22,
//     friends : ['haider', 'fahem', 'bilal']
// };
// console.log(saif.friends[0]);

// saif.friends[0];
// saif has 3 friends , and his best friend called bilal

// console.log(`${saif.firstName} has  ${saif.friends.length} friends, and his friend called ${ saif.friends[2]}`);


// const saif = {
//     firstName : 'saif',
//     lastName : 'ali',
//     job : 'student',
//     birthYeah : 2000,
//     friends : ['haider', 'fahem', 'bilal'],
//     hasDriverLicense : true,

    // calcAge : function(birthYeah){                       // 1st 
    //     return 2040 - birthYeah;
    // },

    // calcAge :  function(){                              //2nd
        // console.log(this);
        // return 2024 - this.birthYeah;
    //  },                                                   

    // calcAge: function(){                                //3rd   bcz of  dry code (dont repeat your self)
        // this.age = 2024- this.birthYeah;
        // return this.age;
    // }, 
    // getSummary : function(){
        // return `${this.firstName} is a ${this.calcAge()} -year old  ${this.job} , and he has  ${this.hasDriverLicense ? 'a ': 'no' }  driver license `;
    // }
    
    // console.log(`${saif.firstName}  is a ${saif.age} ${saif.job} and he has a ${saif.hasDriverLicense}`);


    // calcAge :()=>{
        
    //     console.log(this.closed);
    //     return 2024 - this.birthYeah;
    // }

    // calcAge : function(){
    //     this.age= 2040-birthYeah;
    //     return this.age;
    // }


// };

// console.log(saif.calcAge(2000));

// console.log(saif.calcAge());
// console.log(saif.age);
// console.log(saif.getSummary());

// console.log(this );
// console.log(saif['calcAge'](22));



// code challenge 3


// const mark = {
//     fullName : 'mark killer',
//     mass : 50 ,
//     height : 1.69 ,

//     calcBMI : function(){
//         this.BMI=  this.mass /this.height ** 2 ;
//         return this.BMI;

//     }

// }

// const john = {
//     fullName : 'john smith',
//     mass : 98 ,
//     height : 1.95 ,

//     calcBMI : function(){
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI;

//     }

// }

// console.log(mark.calcBMI());

// console.log(john.calcBMI());

// // john's BMI (28.3) is higher than Mark's (23.9)!" 

// if (mark.BMI >= john.BMI){
//     console.log(`${mark.fullName} BMI ${mark.BMI} is higher than ${john.BMI}`);

// }else if(john.BMI >= mark.BMI) {
//     console.log(`${john.fullName} BMI ${mark.BMI} is higher than ${mark.BMI}`);
    
// }


// array using for loop 

// const saif = [
//      'saif',
//      'ali',
//      'student',
//      22,
//      ['haider', 'fahem', 'bilal']
// ]
// const type = [];

// for (let i=0 ; i < saif.length ; i++){

//     console.log(saif[i] , typeof saif[i]);
//     type[i] = typeof saif[i];
// }
// console.log(type);


// const year = [2000, 2001, 2002, 2003];
// const age = [];

// for (let i=0 ; i < year.length; i++  ) {
//     age.push(2037-year[i]);
// }
// console.log(age);



// for continue

// for (let i=0 ; i < year.length; i++  ) {
//     if (typeof saif[i] !== 'string' ) continue;
//     console.log(saif[i] , typeof saif[i]);
// }


// for (let i=0 ; i < year.length; i++  ) {
//     if (typeof saif[i] === 'number' ) break;
//     console.log(saif[i] , typeof saif[i]);
// }



// for (let rep=0; rep<=10; rep++){
//     console.log(`lifting the exercise ${rep}`);
// }


// let rep=1 ;
// while(rep<=10){
//     console.log(`while loop : lifting the exercise ${rep}`);
//     rep++;
// }


// let dice = Math.trunc( Math.random() * 6 ) + 1;

// while (dice !==6){
//     console.log(`you rolled a dice ${dice}`);
//     dice = Math.trunc( Math.random() * 6 ) + 1;
//     if (dice === 6){
//         console.log('loop will be end ');
//     }
// }




                     // code challenges 4


// const calcTip = function(bills){
//     return  bills >= 50 && bills <= 300 ? bills * 15/100 : bills * 20/100;
// }
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52 ];
// const tips =[];
// const totals = [];



// for (let i=0; i<bills.length; i++){
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }
// console.log( bills, tips , totals);


// const calcAvg = function(arr){
//     let sum = 0 ;
//     for (let i=0; i < arr.length; i++){
//         sum = sum +arr;
//         sum +=arr[i];

//     }
//     return sum/arr.length;

// }
// console.log(calcAvg([2, 3, 7]));
// console.log(calcAvg(totals));
// console.log(calcAvg(tips));




