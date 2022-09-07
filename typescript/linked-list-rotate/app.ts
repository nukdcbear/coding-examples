class LLNode<T> {
    public next: LLNode<T> | null = null;
    public prev: LLNode<T> | null = null;
    constructor(public data: T) { }
}

interface ILinkedList<T> {
    insertInBegin(data: T): LLNode<T>;
    insertAtEnd(data: T): LLNode<T>;
    deleteNode(node: LLNode<T>): void;
    traverse(): T[];
    size(): number;
    search(comparator: (data: T) => boolean): LLNode<T> | null;
}

class LinkedList<T> implements ILinkedList<T> {
    private head: LLNode<T> | null = null;

    public insertInBegin(data: T): LLNode<T> {
        const node = new LLNode(data);
        if (!this.head) {
            this.head = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        return node;
    }

    public insertAtEnd(data: T): LLNode<T> {
        const node = new LLNode(data);
        if (!this.head) {
            this.head = node;
        } else {
            const lastNode = this.getLast(this.head);
            node.prev = lastNode;
            lastNode.next = node;
        }
        return node;
    }

    public deleteNode(node: LLNode<T>): void {
        if (!node.prev) {
            this.head = node.next
        } else {
            const prevNode = node.prev;
            prevNode.next = node.next;
        }
    }

    public traverse(): T[] {
        const array: T[] = [];
        if (!this.head) {
            return array;
        }

        const addToArray = (node: LLNode<T>): T[] => {
            array.push(node.data);
            return node.next ? addToArray(node.next) : array;
        };

        return addToArray(this.head);
    }

    public size(): number {
        return this.traverse().length
    }

    public search(comparator: (data: T) => boolean): LLNode<T> | null {
        const checkNext = (node: LLNode<T>): LLNode<T> | null => {
            if (comparator(node.data)) {
                return node;
            }
            return node.next ? checkNext(node.next) : null;
        };

        return this.head ? checkNext(this.head) : null;
    }

    public getLast(node: LLNode<T>): LLNode<T> {
        return node.next ? this.getLast(node.next) : node;
    }

    public rotate_right(slots: number): void {
        if (!this.head) {
            throw Error("List is empty");
        }

        for (let slot = 0; slot < slots; slot++) {
            const lastNode = this.getLast(this.head);
            this.deleteNode(lastNode);
            this.insertInBegin(lastNode.data);
        }

    }
}

interface Post {
    title: string | number;
}

const llist = new LinkedList<Post>();

// llist.traverse()

// llist.insertAtEnd({ title: "Post A" });
// llist.insertAtEnd({ title: "Post B" });
// llist.insertInBegin({ title: "Post C" });
// llist.insertInBegin({ title: "Post D" });

llist.insertAtEnd({ title: 7 });
llist.insertAtEnd({ title: 7 });
llist.insertAtEnd({ title: 3 });
llist.insertAtEnd({ title: 5 });
console.log(llist.traverse());
// console.log(llist.search(({ title }) => title === "Post A"));

llist.rotate_right(2);
console.log(llist.traverse());