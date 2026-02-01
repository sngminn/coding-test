function solution(citations) {
    const n = citations.length;
    const bucket = Array(n + 1).fill(0);
    
    for(c of citations) {
        if (c >= n) bucket[n]++;
        else bucket[c]++;
    }
    
    let count = 0;
    for (let i = n; i >= 0; i--){
        count += bucket[i];
        
        if (count >= i) return i
    }
    
    return 0
}