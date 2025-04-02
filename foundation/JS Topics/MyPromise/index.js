// console.log("My custom Promise");

// Promise
// - Jaise hi ek promise ka obj bnate ho ek executor function do

// - Executor function ke paas teen cheejo ka access he Ek Resolve, Reject and finnaly

//   - resolve ko call krne pr :
//      - promise fullfilll and
//      - jitne bhi .then function he unko call kr do

//   - reject ko call krne pr :
//      - promise reject ho jata he and
//      - jitne bhi .catch function he unko call krdo

//  - finnaly ko haar baar call krna he

class MyPromise {
  constructor(executorFn) {
    this._state = "pending";
    this._successCallbacks = [];
    this._errorCallbacks = [];
    this._finallyCallbacks = [];

    this._value = undefined;

    executorFn(this.resolverFn.bind(this), this.rejecterFn.bind(this));
  }
  then(cb) {
    if (this._state == "fullfilled") {
      cb(this._value);
      return this;
    }
    this._successCallbacks.push(cb);
    return this;
  }

  catch(cb) {
    if (this._state == "rejected") {
      cb(this._value);
      return this;
    }
    this._errorCallbacks.push(cb);
    return this;
  }

  finnaly(cb) {
    if (this._state == "rejected" || this._state == "fullfilled") {
      cb(this._value);
      return this;
    }
    this._finallyCallbacks.push(cb);
    return this;
  }

  resolverFn(value) {
    console.log(
      "Fullfilling promise, Running ",
      this._successCallbacks.length,
      " callbacks"
    );

    this._state = "fullfilled";
    this._value = value;
    this._successCallbacks.forEach((cb) => cb(value));
    this._finallyCallbacks.forEach((cb) => cb(value));
  }
  rejecterFn(error) {
    this._state = "rejected";
    this._value = error;
    this._errorCallbacks.forEach((cb) => cb(error));
    this._finallyCallbacks.forEach((cb) => cb(error));
  }
}

function wait(seconds) {
  return new MyPromise((resolve, reject) => {
    resolve("hello");
  });
}

const p = wait(0);

console.log("Registering callbacks");

p.then((val) => console.log("Then is called after 5 sec", val))
  .catch((val) => console.log("Error", val))
  .finnaly((val) => console.log("Mai to har baar chaluga ", val));

p.then((val) => console.log("Then is called after 5 sec", val))
  .catch((val) => console.log("Error", val))
  .finnaly((val) => console.log("Mai to har baar chaluga ", val));
