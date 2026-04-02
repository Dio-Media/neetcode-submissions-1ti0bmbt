/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
            // 1. Handle the edge cases: empty list or list of empty lists
    if (!lists || lists.length === 0) return null;
    // Optional: If all lists are empty, you can also handle it here.

    // 2. Initialize a Min-Heap
    const heap = new MinHeap();

    //    JavaScript doesn't have a built-in heap, but you can use an array and implement the heap logic, or use a library.
    //    For the skeleton, we'll use a conceptual `MinHeap` class.

    // 3. Push the head of every non-empty list into the heap
    for(const list of lists){
        if(list){
            heap.push(list);
        }
    }
    // 4. Create a dummy head to simplify building the result list
    const dummy = new ListNode(0);
    let current = dummy;

    // 5. Main loop: while the heap is not empty
    while (!heap.isEmpty()) {
        // a. Pop the smallest node from the heap
        const node = heap.pop();

        // b. Append this node to our result list
        current.next = node;
        current = current.next;

        // c. If the popped node has a 'next' node, push that next node into the heap
        if (node.next) {
            heap.push(node.next);
        }
    }

    // 6. The merged list starts from dummyHead.next
    return dummy.next;
    }
}

class MinHeap {
    constructor() { this.heap = []; }
    push(node) { this.heap.push(node); this.bubbleUp(this.heap.length - 1); }
    pop() {
        const min = this.heap[0];
        const last = this.heap.pop();
        if(this.heap.length > 0){
            this.heap[0] = last;
            this.sinkDown(0);
        }
        return min;
    }
    isEmpty() { return this.heap.length === 0; }

    sinkDown(index){
        const length = this.heap.length;
        while(true){
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let swap = null;
            let element = this.heap[index];
            if(leftChild < length && this.heap[leftChild].val < element.val) swap = leftChild;
                if(rightChild < length){
                    if((swap === null && this.heap[rightChild].val < element.val) || (swap !== null && this.heap[rightChild].val < this.heap[leftChild].val)){
                        swap = rightChild;
                    } 
                }
                if(swap === null) break;
                [this.heap[swap], this.heap[index]] = [this.heap[index], this.heap[swap]];
                index = swap;
            }
    }
    
    bubbleUp(index){
        while(index > 0){
            const parentIndex = Math.floor((index - 1)/ 2);
            if(this.heap[parentIndex].val <= this.heap[index].val) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]
            index = parentIndex;
        }
    }
}
