function twoSum(nums: number[], target: number): number[] {
    const map = new Map();

    for(let i = 0; i < nums.length; i++) {
        const mate = target - nums[i];
        
        if (map.has(mate)) return [map.get(mate), i];
        map.set(nums[i], i);
    }

    return [];
};