function solution(arr) {
    let n = Number(arr[0]);
    let result = new Array(n);
    for (let i = 1; i < arr.length; i++) {
        let input = arr[i].split(" - ");
        let index = Number(input[0]);
        let value = input[1];
        result[index] = value;
    }
    for (let i = 0; i < result.length; i++) {
        if (result[i] === undefined) {
            result[i] = 0;
        }
    }
    result.forEach(x => console.log(x));
}