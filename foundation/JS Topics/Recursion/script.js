function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

// // console.log(pow(2, 2)); // 4
// console.log(pow(2, 3)); // 8
// // console.log(pow(2, 4)); // 16

// Recursive traversals
// Another great application of the recursion is a recursive traversal.

// Imagine, we have a company. The staff structure can be presented as an object:

// let company = {
//   sales: [{
//     name: 'John',
//     salary: 1000
//   }, {
//     name: 'Alice',
//     salary: 1600
//   }],

//   development: {
//     sites: [{
//       name: 'Peter',
//       salary: 2000
//     }, {
//       name: 'Alex',
//       salary: 1800
//     }],

//     internals: [{
//       name: 'Jack',
//       salary: 1300
//     }]
//   }
// };
// In other words, a company has departments.

// A department may have an array of staff. For instance, sales department has 2 employees: John and Alice.

// Or a department may split into subdepartments, like development has two branches: sites and internals. Each of them has their own staff.

// It is also possible that when a subdepartment grows, it divides into subsubdepartments (or teams).

// For instance, the sites department in the future may be split into teams for siteA and siteB. And they, potentially, can split even more. That’s not on the picture, just something to have in mind.

// Now let’s say we want a function to get the sum of all salaries. How can we do that?

// An iterative approach is not easy, because the structure is not simple. The first idea may be to make a for loop over company with nested subloop over 1st level departments. But then we need more nested subloops to iterate over the staff in 2nd level departments like sites… And then another subloop inside those for 3rd level departments that might appear in the future? If we put 3-4 nested subloops in the code to traverse a single object, it becomes rather ugly.

// Let’s try recursion.

// As we can see, when our function gets a department to sum, there are two possible cases:

// Either it’s a “simple” department with an array of people – then we can sum the salaries in a simple loop.
// Or it’s an object with N subdepartments – then we can make N recursive calls to get the sum for each of the subdeps and combine the results.
// The 1st case is the base of recursion, the trivial case, when we get an array.

// The 2nd case when we get an object is the recursive step. A complex task is split into subtasks for smaller departments. They may in turn split again, but sooner or later the split will finish at (1).

let company = {
  // the same object, compressed for brevity
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((pre, curr) => (pre += curr.salary), 0);
  } else {
    let sum = 0;
    for (let nested of Object.values(department)) {
      sum += sumSalaries(nested);
    }
    return sum;
  }
}

// console.log(sumSalaries(company));

// questions

// Sum all numbers till the given one
// importance: 5
// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// For instance:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Make 3 solution variants:

// Using a for loop.
// Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
// Using the arithmetic progression formula.
// An example of the result:

// function sumTo(n) { /*... your code ... */ }

// alert( sumTo(100) ); // 5050
// P.S. Which solution variant is the fastest? The slowest? Why?

// P.P.S. Can we use recursion to count sumTo(100000)?

// using for loop
// function sumTo(n) {
//   let sum = 0;
//   for (let i = n; i > 0; i--) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumTo(100000));

// Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
// function sumTo(n) {
//   if (n > 1) {
//     return n + sumTo(n - 1);
//   } else {
//     return n;
//   }
// }
// console.log(sumTo(100000));
