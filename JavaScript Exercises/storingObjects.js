<<<<<<< HEAD
function solution(arr) {
    let people = [];
    for (let input of arr) {
        let data = input.split(" -> ");
        let person = {};
        person.Name = data[0];
        person.Age = data[1];
        person.Grade = data[2];
        people.push(person);
    }
    for (let person of people) {
        for (let key of Object.keys(person)) {
            console.log(`${key}: ${person[key]}`)
        }
    }
=======
function solution(arr) {
    let people = [];
    for (let input of arr) {
        let data = input.split(" -> ");
        let person = {};
        person.Name = data[0];
        person.Age = data[1];
        person.Grade = data[2];
        people.push(person);
    }
    for (let person of people) {
        for (let key of Object.keys(person)) {
            console.log(`${key}: ${person[key]}`)
        }
    }
>>>>>>> 21e3532725d0ffd15c66fc893bd2a16ae6c50371
}