<<<<<<< HEAD
function solution(arr) {
    let text = arr.join(" ");
    let words = text.split(/\W+/).filter(x => x.length != 0);
    let result = [];
    for (let word of words) {
        if (word == word.toUpperCase()) {
            result.push(word);
        }
    }
    console.log(result.join(", "));
=======
function solution(arr) {
    let text = arr.join(" ");
    let words = text.split(/\W+/).filter(x => x.length != 0);
    let result = [];
    for (let word of words) {
        if (word == word.toUpperCase()) {
            result.push(word);
        }
    }
    console.log(result.join(", "));
>>>>>>> 21e3532725d0ffd15c66fc893bd2a16ae6c50371
}