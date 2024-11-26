// default parameter
// const bookings = [];
// const createBooking = function (
//   flightNUm = 2,
//   numPassenger = 12,// default parameter
//   prices = 100 * numPassenger
// ) {
//   const booking = {
//     flightNUm,
//     numPassenger,
//     prices,
//   };
//   console.log(booking);
//   booking.push(bookings);
// };

// createBooking("Lh123");
// createBooking("lh234", 20);

// callback function
// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(" ");
//   return [first.toUpperCase(), ...other].join(" ");
// };

// const transformer = function (str, fn) {
//   console.log(`original string ${str}`);
//   console.log(`transformed stirng ${fn(str)}`);
//   console.log(`transformed by: ${fn.name}`);
// };
// transformer("js is the best ", upperFirstWord);
// transformer("js is the best ", oneWord);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greetingHy = greet("hey");
// greetingHy('saif');
// greetingHy('fahem');

// greet("hey")("saif");

// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

// greet("hey ")("saif");

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 100));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));
// console.log(addVAT(23));

// code challenge
// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3:  C++"],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     const answers = Number(
//       prompt(
//         `${this.question}\n ${this.options.join("\n")} \n write options Number`
//       )
//     );
//     console.log(answers);

//     // register answers
//     typeof answers === "number" &&
//       answers < this.answers.length &&
//       this.answers[answers]++; //short circuituing
//     console.log(this.answers);
//   },
// };
// poll.registerNewAnswer();

// displayResults(type ==='array'){
//     if (type === 'array '){
//         console.log(this.answers);
//     }else(type === 'string'){
//         console.log(`poll result are : ${this.answers.join(', ')}`);
//     }
// };

// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call(  [5,2,4] ,'string');

// closures
// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };
// const booker = secureBooking();

// booker();
// booker();
// booker();
// console.log("booker");

//  IIFE

// (function () {
//   const header = document.querySelector("h1");
//   header.style.color = "red";

//   document.querySelector("body").addEventListener("click", function () {
//     header.style.color = "blue";
//   });
// })();

// at method

