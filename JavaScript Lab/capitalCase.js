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
}