class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    peek() {
        return this.heap[0];
    }
    
    push(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        
        while(currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.heap[currentIndex] < this.heap[parentIndex]) {
				[this.heap[currentIndex], this.heap[parentIndex]] =
				[this.heap[parentIndex], this.heap[currentIndex]];
                
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }
    
    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        let currentIndex = 0;
        
        while(true) {
            let smallestIndex = currentIndex;
            const leftIndex = currentIndex * 2 + 1;
            const rightIndex = currentIndex * 2 + 2;
            
            if (leftIndex < this.heap.length && this.heap[leftIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftIndex;
            }
            if (rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightIndex;
            }
            if (smallestIndex !== currentIndex) {
                [this.heap[currentIndex], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[currentIndex]];
                currentIndex = smallestIndex;
            } else {
                break;
            }
        }
        
        return minValue;
    }
}

function solution(scoville, K) {
    const minHeap = new MinHeap();
    
    for(const s of scoville) {
        minHeap.push(s);
    }
    
    let count = 0;
    
    while (minHeap.size() >= 2 && minHeap.peek() < K) {
        const first = minHeap.pop();
        const second = minHeap.pop();
        
        const mixed = first + (second * 2);
        minHeap.push(mixed);
        
        count++;
    }
    
    return minHeap.peek() >= K ? count : -1
}