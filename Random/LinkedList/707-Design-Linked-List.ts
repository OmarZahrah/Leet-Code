class Node {
    val: number;
    next: Node | null;

    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}

class MyLinkedList {
    private head: Node | null;
    private tail: Node | null;
    private size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    get(index: number): number {
        if (index < 0 || index >= this.size) return -1;

        let current = this.head;
        for (let i = 0; i < index; i++) {
            if (current) current = current.next;
        }

        return current ? current.val : -1;
    }

    addAtHead(val: number): void {
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        if (!this.tail) this.tail = newNode;
        this.size++;
    }

    addAtTail(val: number): void {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            if (this.tail) this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    addAtIndex(index: number, val: number): void {
        if (index > this.size) return;
        if (index === 0) {
            this.addAtHead(val);
            return;
        }
        if (index === this.size) {
            this.addAtTail(val);
            return;
        }

        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
            if (prev) prev = prev.next;
        }

        if (prev) {
            const newNode = new Node(val);
            newNode.next = prev.next;
            prev.next = newNode;
            this.size++;
        }
    }

    removeFirst(): void {
        if (!this.head) return;
        this.head = this.head.next;
        if (!this.head) this.tail = null;
        this.size--;
    }

    removeLast(): void {
        if (!this.head) return;

        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            let prev = this.head;
            while (prev.next && prev.next !== this.tail) {
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev;
        }
        this.size--;
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.size) return;

        if (index === 0) {
            this.removeFirst();
            return;
        }

        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
            if (prev) prev = prev.next;
        }

        if (prev && prev.next) {
            if (prev.next === this.tail) this.tail = prev;
            prev.next = prev.next.next;
            this.size--;
        }
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */