<<<<<<< HEAD
function solution(arr) {
    let nums = arr[0].split(' ').map(Number);
    if (nums[0] + nums[1] == nums[2]){
        if (nums[0] <= nums[1]){
            console.log(`${nums[0]} + ${nums[1]} = ${nums[2]}`);
        } else {
            console.log(`${nums[1]} + ${nums[0]} = ${nums[2]}`);
        }
    }
    else if (nums[0] + nums[2] == nums[1]) {
        if (nums[0] <= nums[2]){
            console.log(`${nums[0]} + ${nums[2]} = ${nums[1]}`);
        } else {
            console.log(`${nums[2]} + ${nums[0]} = ${nums[1]}`);
        }
    }
    else if (nums[1] + nums[2] == nums[0]) {
        if (nums[1] <= nums[2]){
            console.log(`${nums[1]} + ${nums[2]} = ${nums[0]}`);
        } else {
            console.log(`${nums[2]} + ${nums[1]} = ${nums[0]}`);
        }
    }
    else{
        console.log("No");
    }
=======
function solution(arr) {
    let nums = arr[0].split(' ').map(Number);
    if (nums[0] + nums[1] == nums[2]){
        if (nums[0] <= nums[1]){
            console.log(`${nums[0]} + ${nums[1]} = ${nums[2]}`);
        } else {
            console.log(`${nums[1]} + ${nums[0]} = ${nums[2]}`);
        }
    }
    else if (nums[0] + nums[2] == nums[1]) {
        if (nums[0] <= nums[2]){
            console.log(`${nums[0]} + ${nums[2]} = ${nums[1]}`);
        } else {
            console.log(`${nums[2]} + ${nums[0]} = ${nums[1]}`);
        }
    }
    else if (nums[1] + nums[2] == nums[0]) {
        if (nums[1] <= nums[2]){
            console.log(`${nums[1]} + ${nums[2]} = ${nums[0]}`);
        } else {
            console.log(`${nums[2]} + ${nums[1]} = ${nums[0]}`);
        }
    }
    else{
        console.log("No");
    }
>>>>>>> 21e3532725d0ffd15c66fc893bd2a16ae6c50371
}