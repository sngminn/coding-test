function twoSum(nums: number[], target: number): number[] {
    const numsMap = new Map();
    let ans = [0, 0];

    nums.forEach((num, ind) => numsMap.set(num, ind));

    for(let i = 0; i < nums.length; i++) {
        const sec = Number(numsMap.get(target-nums[i]) || -1);
        if (sec !== -1 && sec !== i){
            ans = [i, Number(sec)];
            break;
        }
    }

    return ans;
};