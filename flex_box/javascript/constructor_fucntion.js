// Constructor Function (Template)
function Person(name, age) {
    this.firstName = name;
    this.age = age;
}

// Creating new objects using the constructor
let person1 = new Person("Alice", 25);
let person2 = new Person("Bob", 30);

console.log(person1.firstName); // Alice
console.log(person2.firstName); // Bob
