function solution(arr) {
    let people = [];
    for (let input of arr) {
        let obj = JSON.parse(input);
        people.push(obj);
    }
    for (let person of people) {
        console.log(`Name: ${person["name"]}`);
        console.log(`Age: ${person["age"]}`);
        console.log(`Date: ${person["date"]}`);
    }
}