const heap = [];

function push(value) {
	heap.push(value);
    let pointer = heap.length - 1;
    while(true) {
		const prev = Math.floor((pointer - 1) / 2);
        if (heap[prev] && heap[pointer] < heap[prev]){
	        [heap[pointer], heap[prev]] = [heap[prev], heap[pointer]];
        } else break;
        pointer = prev;
    }
}

function pop() {
    const len = heap.length;
    if (len === 0) return null;
	if (len === 1) return heap.pop();
    
    const result = heap[0];
    heap[0] = heap.pop();
    
    let pointer = 0;
    
    while(true) {
        let smallest = pointer;
        const left = pointer * 2 + 1;
        const right = pointer * 2 + 2;
        
        if (left < len && heap[left] < heap[smallest]) smallest = left;
        if (right < len && heap[right] < heap[smallest]) smallest = right;
        
        if (smallest === pointer) break;
        
        [heap[pointer], heap[smallest]] = [heap[smallest], heap[pointer]];
        pointer = smallest;
    }
    
    return result;
}

function solution(scoville, K) {
    for(s of scoville) push(s);
    let pointer = 0;
    let count = 0;
    
    while(heap.length >= 2 && heap[0] < K) {
        const fir = pop();
        const sec = pop();
        const sum = fir + sec * 2;
        push(sum);
        count ++;
    }

    return heap[0] >= K ? count : -1;
}