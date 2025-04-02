function showName(args) {
  console.log(arguments);
  console.log(arguments[0]);
  console.log(arguments[1]);

  //   it's iterable
  for (let arg of arguments) console.log(arg);
}

// shows: 2, Julius, Caesar
// showName("Julius", "Caesar");

// // shows: 1, Ilya, undefined (no second argument)
// showName("Ilya");

// function f() {
//   let showArg = () => console.log(arguments);
//   showArg(12);
// }

// f(1); // 1

// console.log(global.arguments);

let str = "Hello";

console.log([...str]); // H,e,l,l,o
