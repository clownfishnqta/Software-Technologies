<<<<<<< HEAD
function solution(arr) {
    let obj = {};
    for (let input of arr) {
        let inputs = input.split(" -> ");
        let key = inputs[0];
        let value = inputs[1];
        if (!isNaN(Number(value))) {
            value = Number(value);
        }
        obj[key] = value;
    }
    console.log(JSON.stringify(obj));
=======
function solution(arr) {
    let obj = {};
    for (let input of arr) {
        let inputs = input.split(" -> ");
        let key = inputs[0];
        let value = inputs[1];
        if (!isNaN(Number(value))) {
            value = Number(value);
        }
        obj[key] = value;
    }
    console.log(JSON.stringify(obj));
>>>>>>> 21e3532725d0ffd15c66fc893bd2a16ae6c50371
}