class ListNode<T> {
  next?: ListNode<T>;

  constructor(public value: T) {}
}

class LinkedList<T> {
  private root?: ListNode<T>;
  private lenght = 0;

  add(value: T) {
    const node = new ListNode(value);
    if(!this.root) {
        this.root = node;
    } else {
        let current = this.root;
        while(current.next) {
            current = current.next;
        }
        current.next = node;
    }
    this.lenght++;
  }
}

const numberList = new LinkedList<number>();
const nameList = new LinkedList<string>();
