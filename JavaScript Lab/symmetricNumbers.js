<<<<<<< HEAD
function solution(arr) {
    let num = Number(arr[0]);

    let symmetricArr = [];
    for (let i = 1; i <= num; i++) {
        if (isSymmetric(i.toString())) {
            symmetricArr.push(i);
        }
    }
    console.log(symmetricArr.join(' '));

    function isSymmetric(numAsStr) {
        let reversedArr = numAsStr.split('').reverse();
        let reversedArrToStr = reversedArr.join('');

        return reversedArrToStr === numAsStr;
    }
=======
function solution(arr) {
    let num = Number(arr[0]);

    let symmetricArr = [];
    for (let i = 1; i <= num; i++) {
        if (isSymmetric(i.toString())) {
            symmetricArr.push(i);
        }
    }
    console.log(symmetricArr.join(' '));

    function isSymmetric(numAsStr) {
        let reversedArr = numAsStr.split('').reverse();
        let reversedArrToStr = reversedArr.join('');

        return reversedArrToStr === numAsStr;
    }
>>>>>>> 21e3532725d0ffd15c66fc893bd2a16ae6c50371
}