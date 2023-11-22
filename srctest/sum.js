export const sum = (num1, num2) => {
    return num1 + num2;
};

export class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    returnPerson() {
        return this;
    }
}

const keluarga = [];

const dataKeluarga = [
    {name: "Rizky Al Arief", age:20},
    {name: "Sri Mulyani", age: 55}
];

for(const data of dataKeluarga) {
    const person = new Person(data.name, data.age);
    keluarga.push(person);
}
const expectedValue = [
    new Person("Rizky Al Arief", 20),
    new Person("Sri Mulyani", 55)
];

console.log(keluarga[0]);
console.log(expectedValue[0]);