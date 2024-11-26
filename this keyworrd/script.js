// this keyword in practice

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(2000);

// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(2001);

// const fahem = {
//   year: 2001,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// fahem.calcAge();

// const saif = fahem.calcAge;
// saif.calcAge();

// const f = fahem.calcAge;

const saif = {
  firstName: "fahem",
  lastName: "ali",
  age: 30,
  Family: ["ahmed", "bilal"],
};
const saifCopy = Object.assign({}, saif);
saifCopy.lastName = "abbas";
saifCopy.Family.push("rafay");

console.log("before marriage ", saif);
console.log("after marriage ", saifCopy);
