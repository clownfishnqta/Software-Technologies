<<<<<<< HEAD
function solution(arr) {
    let nums = arr.map(Number).sort((a, b) => b - a);
    for (var i = 0; i < Math.min(3, nums.length); i++) {
        console.log(nums[i]);
    }
=======
function solution(arr) {
    let nums = arr.map(Number).sort((a, b) => b - a);
    for (var i = 0; i < Math.min(3, nums.length); i++) {
        console.log(nums[i]);
    }
>>>>>>> 21e3532725d0ffd15c66fc893bd2a16ae6c50371
}