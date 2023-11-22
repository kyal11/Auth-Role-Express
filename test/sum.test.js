import { sum, Person } from "../srctest/sum.js";

test("Test sum 1", () => {
    const result = sum(5, 7);

     expect(result).toBe(12);
});

test("Test Equals 1", () => {
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
    expect(keluarga).toEqual(expectedValue);
});
