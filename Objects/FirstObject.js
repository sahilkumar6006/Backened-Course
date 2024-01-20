const mySym  = Symbol("key1");

const person = {
  firstName: "sahil",
  lastName: "kumar",
  [mySym] : "mykey1", 
  age: 22,
  eyeColor: "black",
  greting: function () {
     return `HI my name is ${this.firstName}  ${this.lastName}`;
  },
};

console.log(person.firstName);
console.log(person.age);
console.log(person.eyeColor);
console.log(person.greting())
console.log(person.mysym);