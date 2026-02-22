class MinHeap {
    constructor() { this.heap = [] }
    peek() { return this.heap[0] }
    size() { return this.heap.length }
    push(value) {
        this.heap.push(value);
        let newbie = this.size() - 1;
        
        while(true) {
            const parent = Math.floor((newbie - 1) / 2);
            if (this.heap[newbie] < this.heap[parent]) {
                [this.heap[newbie], this.heap[parent]] = [this.heap[parent], this.heap[newbie]];
                newbie = parent;
            } else break;
        }
    }
    pop() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.heap.pop();
        
        const result = this.heap[0];
        this.heap[0] = this.heap.pop();
        let newbie = 0;
        
        while(true) {
            const children = [newbie * 2 + 1, newbie * 2 + 2];
            let smallest = newbie;
            
            if (this.heap[children[0]] < this.heap[smallest]) { smallest = children[0] }
            if (this.heap[children[1]] < this.heap[smallest]) { smallest = children[1] }
            
            if (newbie !== smallest) {
				[this.heap[smallest], this.heap[newbie]] = [this.heap[newbie], this.heap[smallest]];
				newbie = smallest;
            } else break;
        }
        
        return result;
    }
}

function solution(scoville, K) {
    const heap = new MinHeap();
    let count = 0;
    
    scoville.forEach(s => heap.push(s));
    
    while(heap.size() >= 2 && heap.peek() < K) {
        const first = heap.pop();
        const second = heap.pop();
        const mixed = first + second * 2;
        heap.push(mixed);
        count++;
    }
    return heap.peek() < K ? -1 : count;
}