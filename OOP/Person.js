class Person {
     name;
    email;
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    print() {
        return `My name is ${this.name} and my email is ${this.email}  `;
    }
}


const object2 = new Person('sh', 'test@email.com');
const object1 = new Person('John', 'john@example.com');
console.log(object1.print(), object2.print());