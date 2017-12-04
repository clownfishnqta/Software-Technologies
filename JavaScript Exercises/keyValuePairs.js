function solution(arr) {
    let results = new Map();
    for (let i = 0; i < arr.length-1; i++) {
        let arrBeforeSplit = arr[i].split(' ');
        let key = arrBeforeSplit[0];
        let value = arrBeforeSplit[1];
        results.set(key, value);
    }
    let key = arr[arr.length-1];
    if (results.has(key)) {
        console.log(results.get(key));
    } else {
        console.log("None");
    }
}