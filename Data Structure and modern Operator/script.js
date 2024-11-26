// code challenges
// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;
// console.log(players1, players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
// printGoals(...game.scored);

// team1 < team2 && console.log("team 1 is win");
// team1 > team2 && console.log("team 2 is win");

///////////////////////////////////////
// Destructuring Arrays
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , , secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(1, 2);
// console.log(starter, mainCourse);

// Nested destructuring
// const nested = [3, 4, [6, 7]];
// const [i, , j] = nested;
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default values
// const [p, q] = [8, 9];
// console.log(p, q);

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// short circuiting

// OR operator always return a truly value
// console.log("jonas" || 23);
// console.log("" || undefined);
// console.log("hello" || null);
// console.log(null || 0 || undefined || "" || "hello");

// AND OPERTATOR return a falsy value
// console.log("hello " && "Jonas" && 0);
// console.log("saif" && "jonas" && null && 0 && undefined && "" && "hello");

// restaurant.numGuests = 23;
// const guests = restaurant.numGuests || 10;
// console.log(guests);
// nulish coalescing operator
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

//directly doesnot define this firstly we check the if condition if the property exist then we use optional chaining

// console.log(restaurant.openingHours.mon.open);

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

//with optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open || "closed";
//   console.log(`on ${day} , we open at ${open}`);

// method
// console.log(restaurant.order?.(0, 1) ?? "method deos not exist");
// console.log(restaurant.orderRestiro?.(0, 1) ?? "method deos not exist");

// code challenges
// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// for (const [i, player] of game.scored.entries())
//   console.log(`Goals: ${i + 1} : ${player}`);

// const order = ["pizza", "burger", "pizza", "burger", "pasta", "pasta"];
// const uniqueOrder = new Set(order);
// console.log(uniqueOrder);
// console.log(uniqueOrder.size);
// console.log(uniqueOrder.has("pizza"));
// console.log(uniqueOrder.has("jalebi"));
// uniqueOrder.add("garlic");
// uniqueOrder.add("bread");
// console.log(uniqueOrder);

// uniqueOrder.clear();
// console.log(uniqueOrder);

// Map iteration

// const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// const question = new Map([
//   ["question", "what is the best programing language in world"],
//   [1, "C"],
//   [2, "java"],
//   [3, "javascript"],
//   ["correct", 3],
//   [true, "correct"],
//   [false, "try again"],
// ]);
// console.log(question);

// convert object to Map

// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// quiz Map
// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
// }
// const Answer = Number(prompt("Your Answer"));
// const Answer = 3;

// console.log(Answer);

// console.log(question.get(question.get("correct") === Answer));

// convert map to Array

// console.log([...question]);
// console.log([question.key]);
// console.log([question.value]);

// practice working with String

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("not allowed");
  } else {
    console.log("you are allowd");
  }
};

checkBaggage("i have a laptop , some food and a pocket knife");
checkBaggage("socks and camera");
checkBaggage("snack and a gun for protection");

// padding
const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCreditCard(123456778));
console.log(maskCreditCard(12378859934));
console.log(maskCreditCard(98765378));
