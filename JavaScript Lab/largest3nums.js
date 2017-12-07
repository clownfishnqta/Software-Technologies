function solution(arr) {
    let nums = arr.map(Number).sort((a, b) => b - a);
    for (var i = 0; i < Math.min(3, nums.length); i++) {
        console.log(nums[i]);
    }
}