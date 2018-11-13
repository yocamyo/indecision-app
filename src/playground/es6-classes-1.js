class Person {
    constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

const me = new Person('Andrew', 26);
console.log(me.getDescription);

const other = new Person ('Camden', 28);
console.log(other.getDescription);
