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
            const getLast = (node: LLNode<T>): LLNode<T> => {
                return node.next ? getLast(node.next) : node;
            };

            const lastNode = getLast(this.head);
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
}

interface Post {
    title: string;
}

const llist = new LinkedList<Post>();

llist.traverse()

llist.insertAtEnd({ title: "Post A" });
llist.insertAtEnd({ title: "Post B" });
llist.insertInBegin({ title: "Post C" });
llist.insertInBegin({ title: "Post D" });

console.log(llist.traverse());
console.log(llist.search(({ title }) => title === "Post A"));