// function duplicate(nubmer) {
//   const result = number * 2;
//   return result;
// }
// console.log(duplicate(5));
// ---------------------------------------------
// const duplicate = (number) => number*2

// console.log(duplicate(5));
// ------------------------------------------------------
//map

// const array = [1, 2, 3];
// const newArray = array.map(function (item) {
//   const result = item * 2;
//   return result;
// });

// console.log(newArray);
// ----------------------------------------------------------
//find & filter
//بر روی ارایه ها اعمال میشوند
//filter  یک ارایه برمیگرداند
//find یک ایتم برمیگرداند

// const array = [22, 3, 43, 65, 7];

// const newNumber = array.filter(function (item) {
//   return item > 10;
// });
// ---or
// const newNumber = array.filter((item) => item > 10);
// ----find
// const newNumber = array.find((item) => item === 65);
// console.log(newNumber);

//----------------------
// reduce

// const number = [2, 3, 5, 6, 7];
// const result = number.reduce(
//   (accumulator, currentItem) => accumulator + currentItem,
//   0
// );
// console.log(result);
//------------------------
//template literals

const name = "Milad";
const age = 26;

// const text = "Hi i am " + name + " and i am " + age + " years old";
// console.log(text);
const text=`hi i am ${name} and i am ${age} years old`
console.log(text);