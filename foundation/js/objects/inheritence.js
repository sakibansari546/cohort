// const p1 = {
//   name: "Sakib",
//   age: 12,
//   getName: function () {
//     console.log(this.name);
//   },
// };

// const p2 = {
//   name: "Sakib",
//   age: 12,
//   __proto__: p1,
// };
// console.log(p1.name);

// p2.__proto__.name = "hacker";
// console.log(p2.getName());
// console.log(p1.name);

const p1 = {
  xp1: "xp1",
};
const p2 = {
  xp2: "xp2",
  __proto__: p1,
};
const p3 = {
  xp3: "xp2",
  __proto__: p2,
};

// p1.__proto__ = p3;

console.log(p3.xp1);
console.log(p2.xp1);
console.log(p1.xp1);

console.log(p3.xp2);
console.log(p2.xp2);
console.log(p1.xp2);
