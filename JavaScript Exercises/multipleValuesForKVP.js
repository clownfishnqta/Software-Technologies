function solution(arr) {
    let results = new Map();
    for (let i = 0; i < arr.length-1; i++) {
        let arrBeforeSplit = arr[i].split(' ');
        let key = arrBeforeSplit[0];
        let value = arrBeforeSplit[1];
        if (!results.has(key)) {
            results.set(key, [value]);
        } else {
            results.get(key).push(value);
        }
    }
    let key = arr[arr.length-1];
    if (results.has(key)) {
        results.get(key).forEach(x => console.log(x));
    } else {
        console.log("None");
    }
}